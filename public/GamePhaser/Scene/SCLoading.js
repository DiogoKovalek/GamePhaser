class SCLoading extends Phaser.Scene{
    constructor(){
        super("loadingGame");
    }

    preload(){
        //Mapa ====================================
        this.load.image("tiles", "/GamePhaser/Assets/World/Overworld.png");
        this.load.tilemapTiledJSON("map1", "/GamePhaser/Assets/World/map.json");
        //=========================================

        this.load.spritesheet("player", "/GamePhaser/Assets/mage.png",{
            frameWidth:16,
            frameHeight:16
        })
    }

    create(){
        this.add.text(20,20,"Loading Game...");

        this.scene.start("GameL1");
    }
}