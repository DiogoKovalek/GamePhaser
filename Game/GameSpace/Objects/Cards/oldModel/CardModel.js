export class CardModel extends Phaser.GameObjects.Image{
    constructor(scene, x, y, img){
        super(scene,x,y,img);
        this.setOrigin(0,0);
        scene.add.existing(this);
    }

}