import { CardModel } from "./CardModel.js";

export class CDBolinhaDeGolf extends CardModel{
    constructor(scene, x, y){
        const img = "CDBolinhaDeGolf"; //imagem do banco
        super(scene,x,y,img);
    }
    constructor(scene, x, y, alph){
        const img = "CDBolinhaDeGolf";
        super(scene, x, y, img, alph);
    }
}