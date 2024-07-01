class SCLoading extends Phaser.Scene{
    constructor(){
        super("loadingGame");
    }

    preload(){
        //Mapa ====================================
        this.load.image("tiles", "/Assets/World/Overworld.png");
        this.load.tilemapTiledJSON("map1", "/Assets/World/map.json");
        //=========================================

        this.load.spritesheet("player", "/Assets/mage.png",{
            frameWidth:16,
            frameHeight:16
        })
        
    }

    create(){
        this.add.text(20,20,"Loading Game...");

        this.framePlayer = 6;

        this.anims.create({
            key: "player_anim_up",
            frames: this.anims.generateFrameNumbers("player",{
                start:0,
                end:2
            }),
            frameRate: this.framePlayer,
            repeat:-1
        });
        this.anims.create({
            key: "player_anim_right",
            frames: this.anims.generateFrameNumbers("player",{
                start:3,
                end:5
            }),
            frameRate: this.framePlayer,
            repeat:-1
        });
        this.anims.create({
            key: "player_anim_down",
            frames: this.anims.generateFrameNumbers("player",{
                start:6,
                end:8
            }),
            frameRate: this.framePlayer,
            repeat:-1
        });
        this.anims.create({
            key: "player_anim_left",
            frames: this.anims.generateFrameNumbers("player",{
                start:9,
                end:11
            }),
            frameRate: this.framePlayer,
            repeat:-1
        });

        this.anims.create({
            key: "player_standing_up",
            frames: this.anims.generateFrameNumbers("player",{
                start:1,
                end:1
            })
        });
        this.anims.create({
            key: "player_standing_right",
            frames: this.anims.generateFrameNumbers("player",{
                start:4,
                end:4
            }),
        });
        this.anims.create({
            key: "player_standing_down",
            frames: this.anims.generateFrameNumbers("player",{
                start:7,
                end:7
            })
        });
        this.anims.create({
            key: "player_standing_left",
            frames: this.anims.generateFrameNumbers("player",{
                start:10,
                end:10
            })
        });

        this.scene.start("GameL1");
    }
}