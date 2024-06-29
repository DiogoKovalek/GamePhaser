class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        /*
        this.load.image("key", "url");
        key: nome da imagem
        url: caminho da imagem
        */
       
        this.load.image("background", "/Assets/images/background.png");

        /*
        this.load.image("ship1", "/Assets/images/ship.png");
        this.load.image("ship2", "/Assets/images/ship2.png");
        this.load.image("ship3", "/Assets/images/ship3.png");
        */  

        this.load.spritesheet("ship1", "/Assets/spritesheet/ship.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2", "/Assets/spritesheet/ship2.png",{
            frameWidth:32,
            frameHeight:16
        });
        this.load.spritesheet("ship3", "/Assets/spritesheet/ship3.png",{
            frameWidth:32,
            frameHeight:32
        });
        this.load.spritesheet("explosion", "/Assets/spritesheet/explosion.png",{
            frameWidth:16,
            frameHeight:16
        });
        this.load.spritesheet("player", "/Assets/spritesheet/player.png",{
            frameWidth: 16,
            frameHeight: 24
        });
        this.load.spritesheet("power-up", "/Assets/spritesheet/power-up.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("beam", "/Assets/spritesheet/beam.png", {
            frameWidth: 16,
            frameHeight: 16
        });
    }

    create(){
        this.add.text(20, 20, "Loading Game...");
        this.scene.start("playGame");   

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship1"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        this.anims.create({
            key: "player_anim",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up",{
                start:0,
                end:1
            }),
            frameRate: 20,
            repeat:-1
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up",{
                start:2,
                end:3
            }),
            frameRate: 20,
            repeat:-1
        });
        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        })
    }
}