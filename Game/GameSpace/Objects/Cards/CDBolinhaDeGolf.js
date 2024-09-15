import { CardModel } from "./CardModel.js";

export class CDBolinhaDeGolf extends CardModel{
    constructor(scene, x, y){
        const img = "CDBolinhaDeGolf"; //imagem do banco
        super(scene,x,y,img);
    }
}