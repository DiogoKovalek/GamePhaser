
import {SCGameCard} from "../Scene/SCGameCard.js";

const gameWidth = 1920;
const gameHeight = 1080;

var config = {
    /*scale: {
        width:240,
        height:208,
        zoom:3   
    },*/
    
    type: Phaser.AUTO,
    width: gameWidth, 
    height: gameHeight,  
    scale: {
        mode:Phaser.Scale.FIT,
    },
    canvasStyle: "game-container",
    bacgroundColor: 0x000000,
    scene: [SCGameCard],
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