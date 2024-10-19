
import { CDBolinhaDeGolf } from "../Objects/Cards/oldModel/CDBolinhaDeGolf.js";
import { Baralho } from "../Objects/Cards/oldModel/Baralho.js";
import { CartaTraz } from "../Objects/Cards/oldModel/CartaTraz.js";

export class SCGameCard extends Phaser.Scene {
    constructor() {
        super("Jogo de Carta");
    }

    preload() {
        var caminho = "/Game/GameSpace/Assets";
        this.load.image("background", caminho + "/backgroundGameCard.png");
        this.load.image("barra", caminho + "/barra.png");
        this.load.pack("packCards", caminho + "/Cartas/packCards.json", "packCards");
    }

    create() {

        //#region background e UI
        const { width, height, scaleMode } = this.scale;

        const background = this.add.image(0, 0, "background").setOrigin(0, 0);
        background.setDisplaySize(width, height);
        this.add.rectangle(0, 0, width * scaleMode, height * scaleMode, "#000000", 160);

        const barra = this.add.image(0, 0, "barra").setOrigin(0, 0);
        //#endregion

        //#region baralho e cartas

        const distanciaBaralhoX = 30;
        const distanciaBaralhoY = 10;

        const cartaTexture = this.textures.get("cartaTraz");

        const cardWidth = cartaTexture.source[0].width;
        const cardHeight = cartaTexture.source[0].height;

        //insere o baralho
        const baralhoPlayer = new Baralho(this, barra.width + distanciaBaralhoX, height - (cardHeight + distanciaBaralhoY));
        const baralhoEnemy = new Baralho(this, width - (distanciaBaralhoX + cardWidth), distanciaBaralhoY);

        //mão
        let playerHand = new Array(3);
        let enemyHand = new Array(3);

        const distBetwCards = 100; // distancia entre as cartas
        const distHandX = barra.width + (((width - barra.width) / 2) - distBetwCards - (cardWidth / 2));
        const distHandYFB = -10;//distancia y da borda
        const alphCard = 20;
        const playerSlot = [{ x: distHandX, y: height - cardHeight - distHandYFB, alph: -alphCard },
        { x: distHandX + distBetwCards, y: height - cardHeight - distHandYFB, alph: 0 },
        { x: distHandX + distBetwCards * 2, y: height - cardHeight - distHandYFB, alph: alphCard }];

        const enemySlot = [{ x: distHandX, y: distHandYFB, alph: alphCard },
        { x: distHandX + distBetwCards, y: distHandYFB, alph: 0 },
        { x: distHandX + distBetwCards * 2, y: distHandYFB, alph: alphCard }];

        // Depois tem que aleatorizar as cartas do baralho

        this.insertCardsByBaralhoFromHandPlayer(baralhoPlayer, playerHand, playerSlot);

        for (let i = 0; i < enemyHand.length; i++) {
            const card = new CartaTraz(this, enemySlot[i].x, enemySlot[i].y);
            enemyHand[i] = card;

        }

        //#endregion


        //#region cria zona

        let listCardsZonePlayer = [];
        let listCardsZoneEnemy = [];
        const cardZone = this.add.zone(barra.width, (height - 550) / 2, width - barra.width, 550);
        cardZone.setRectangleDropZone(cardZone.width, cardZone.height);
        cardZone.setOrigin(0, 0);
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(cardZone.x, cardZone.y, cardZone.input.hitArea.width, cardZone.input.hitArea.height);

        //#endregion

        //#region Acoes de mouse

        /*
        'dragstart': detecta o inicio de uma ação Drag
        'drag': enquanto o objeto está sendo arrastado
        'dragenter': entra em uma zona de drop
        'dragleave': sai de zona de drop
        'drop': objeto é solto sobre uma zona
        'dragend': objeto é solto fora da zona
        */


        this.input.on('dragstart', function (pointer, gameObject) {
            this.children.bringToTop(gameObject);//renderiza em cima de todos os outro gameObjects

        }, this);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragenter', (pointer, gameObject, dropZone) => {

            graphics.clear();
            graphics.lineStyle(2, 0x00ffff);
            graphics.strokeRect(cardZone.x, cardZone.y, cardZone.input.hitArea.width, cardZone.input.hitArea.height);

        });

        this.input.on('dragleave', (pointer, gameObject, dropZone) => {

            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(cardZone.x, cardZone.y, cardZone.input.hitArea.width, cardZone.input.hitArea.height);
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {

            const disbetwC = 15; //distancia entre as cartas
            let PosXForCardZone = dropZone.x + (disbetwC * (listCardsZonePlayer.length + 1)) + (cardWidth * listCardsZonePlayer.length);
            let PosYForCardZone = dropZone.y + (dropZone.height - cardHeight);

            listCardsZonePlayer.push(gameObject);
            playerHand[playerHand.findIndex(card => card === gameObject)] = null;

            gameObject.x = PosXForCardZone;
            gameObject.y = PosYForCardZone;

            gameObject.input.enabled = false;
            
            this.insertCardsByBaralhoFromHandPlayer(baralhoPlayer, playerHand, playerSlot);
        });

        this.input.on('dragend', (pointer, gameObject, dropped) => {

            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }

            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(cardZone.x, cardZone.y, cardZone.input.hitArea.width, cardZone.input.hitArea.height);

        });
        //#endregion
    }

    insertCardsByBaralhoFromHandPlayer(baralhoPlayer, playerHand, playerSlot) { // melhorar o codigo
        for (let i = 0; i < playerHand.length; i++) {
            if (playerHand[i] == null) {
                const card = baralhoPlayer.buyCardFromBaralho();
                if (card != null) {
                    card.setPosition(playerSlot[i].x, playerSlot[i].y);
                    card.setInteractive();
                    this.input.setDraggable(card);
                    playerHand[i] = card;
                }else{ 
                    break;
                }
            }
        }
    }

    insertCardsByBaralhoFromHandEnemy() {
        for (let i = 0; i < this.enemyHand.length; i++) {
            if (this.enemyHand[i] == null) {
                const card = this.baralhoEnemy.buyCardFromBaralho();
                card.setPosition(this.EnemySlot[i].x, this.EnemySlot[i].y);
                this.enemyHand[i] = card;
            }
        }
    }

}