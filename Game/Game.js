var config = {
    width: 256,
    height: 272,
    bacgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: "arcade",    
        arcade: {
            debug: false
        }
    }
}

var gameSettings = {
    playerSpeed: 200
}

var game = new Phaser.Game(config);
