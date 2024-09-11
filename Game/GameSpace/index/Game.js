

var config = {
    /*scale: {
        width:240,
        height:208,
        zoom:3   
    },*/
    
    mode: Phaser.Scale.FIT, // Ajusta o jogo à área disponível mantendo a proporção
    width: window.innerWidth, 
    height: window.innerHeight,  
    canvasStyle: "game-container",
    bacgroundColor: 0x000000,
    scene: [TextSCCardGame],
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