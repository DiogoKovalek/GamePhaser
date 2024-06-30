class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){

        var x = x;
        var y = y;

        super(scene, x, y, "player");
        scene.add.existing(this);

        //scene.physics.world.enebleBody(this);

        //scene.projectiles.add(this);
        
    }

    create(){
        var left = false;
        var rigth = false;
        var up = false;
        var down = false;

        var speed = 100;

        var playerAnimUp = scene.anim.get("player_anim_up");
        this.play(playerAnimUp);
    }


    update(){

    }

    movePlayer(){

    }
}