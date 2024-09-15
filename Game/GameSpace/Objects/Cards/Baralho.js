import { CardModel } from "./CardModel.js";

export class Baralho extends CardModel{
    constructor(scene, x, y){
        const img = "cartaTraz";
        super(scene,x,y,img);
    }
}