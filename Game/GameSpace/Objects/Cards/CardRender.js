import { Card } from "./Card.js";
export class CardRender extends Phaser.GameObjects.Image{
    constructor(scene, x, y, card){
        super(scene,x,y,card.img);
        this.setOrigin(0,0);
        scene.add.existing(this);
    }
}