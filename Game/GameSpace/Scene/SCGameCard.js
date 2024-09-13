
export class SCGameCard extends Phaser.Scene{
    constructor(){
        super("Jogo de Carta");
    }

    preload(){
        var caminho ="/Game/GameSpace/Assets";
        this.load.image("background", caminho + "/backgroundGameCard.png");
        this.load.image("barra", caminho +"/barra.png");
    }

    create(){

        const{width, height, scaleMode} = this.scale;

        const background = this.add.image(0,0,"background").setOrigin(0,0);
        background.setDisplaySize(width,height);
        this.add.rectangle(0,0,width*scaleMode, height*scaleMode, "#000000", 160);
        
        const barra = this.add.image(0,0,"barra").setOrigin(0,0);
        
    }

}