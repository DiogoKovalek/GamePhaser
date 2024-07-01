class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {

        super(scene, x, y, "player");
        scene.add.existing(this);

        this.speed = 80;

        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;

        this.playerAnimUp = scene.anims.get("player_anim_up");
        this.playerAnimLeft = scene.anims.get("player_anim_left");
        this.playerAnimDown = scene.anims.get("player_anim_down");
        this.playerAnimRight = scene.anims.get("player_anim_right");

        this.playerStandUP = scene.anims.get("player_standing_up");
        this.playerStandLeft = scene.anims.get("player_standing_left");
        this.playerStandDown = scene.anims.get("player_standing_down");
        this.playerStandRight = scene.anims.get("player_standing_right");

        this.spritePlay = this.playerStandDown;

        this.play(this.spritePlay);

        scene.physics.world.enableBody(this);

        scene.listEntidades.add(this); // adiciona a lista de entidades
    }


    update() {
        this.movePlayer();
    }

    movePlayer() {
        
        if (this.scene.cursorKeys.left.isDown) {
            this.left = true;    
        } else if (this.scene.cursorKeys.right.isDown) {
            this.right = true;
        } else {
            if(this.left){
                this.animarPersonagem(this.playerStandLeft);
                this.left = false;
                this.body.velocity.x = 0;
            }else if(this.right){
                this.animarPersonagem(this.playerStandRight);
                this.right = false;
                this.body.velocity.x = 0;
            }
        }
        if (this.scene.cursorKeys.up.isDown) {
            this.up = true;
        } else if (this.scene.cursorKeys.down.isDown) {
            this.down = true;
        } else {
            if(this.up){
                this.animarPersonagem(this.playerStandUP);
                this.up = false;
                this.body.velocity.y = 0;
            }else if(this.down){
                this.animarPersonagem(this.playerStandDown);
                this.down = false;
                this.body.velocity.y = 0;
            }
        }

        if(this.left){
            if(this.up){
                this.body.velocity.x = - this.speed/(Math.sqrt(2));
                this.body.velocity.y = - this.speed/(Math.sqrt(2));
            }else if(this.down){
                this.body.velocity.x = - this.speed/(Math.sqrt(2));
                this.body.velocity.y = this.speed/(Math.sqrt(2));
            }else{
                this.body.velocity.x = -this.speed;
                this.animarPersonagem(this.playerAnimLeft);
            }
        }else if(this.right){
            if(this.up){
                this.body.velocity.x = this.speed/(Math.sqrt(2));
                this.body.velocity.y = - this.speed/(Math.sqrt(2));
            }else if(this.down){
                this.body.velocity.x = this.speed/(Math.sqrt(2));
                this.body.velocity.y = this.speed/(Math.sqrt(2));
            }else{
                this.body.velocity.x = this.speed;
                this.animarPersonagem(this.playerAnimRight);
            }
        }else if(this.up){
            this.body.velocity.y = -this.speed;
            this.animarPersonagem(this.playerAnimUp);
        }else if(this.down){
            this.body.velocity.y = this.speed;
            this.animarPersonagem(this.playerAnimDown);
        }
    }

    animarPersonagem(sprite){
        if(sprite != this.spritePlay){
            this.spritePlay = sprite;
            this.play(this.spritePlay);
        }
    }

}
