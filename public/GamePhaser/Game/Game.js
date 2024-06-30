var config = {
    scale: {
        width:240,
        height:208,
        zoom:4
    },
    canvasStyle: "game-container",
    bacgroundColor: 0x000000,
    scene: [SCLoading, SCGameL1],
    pixelArt: true,
    parent: "game-container", //classe para css
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}


var game = new Phaser.Game(config);