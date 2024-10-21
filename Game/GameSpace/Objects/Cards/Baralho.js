import { Card } from "./Card.js";

export class Baralho extends Phaser.GameObjects.Image{
    constructor(scene, x, y) {
        const img = "cartaTraz";
        super(scene, x, y, img);
        this.setOrigin(0,0);
        scene.add.existing(this);

        this.cardsFromBaralho = [];
        for (let i = 0; i < 6; i++) {
            this.cardsFromBaralho.push(new Card(scene, i, "BolhinhaDeGolf", 1));
        }
    }

    buyCardFromBaralho() {
        const opacidade = 0.7;
        if (this.cardsFromBaralho.length >= 1) {
            const index = Math.floor(Math.random() * this.cardsFromBaralho.length);
            const card = this.cardsFromBaralho[index];
            this.cardsFromBaralho.splice(index, 1);
            return card;
        }
        if(this.cardsFromBaralho.length == 0){//nao tem mais carta
            this.alpha = opacidade;
            return null;
        }
    }
}

