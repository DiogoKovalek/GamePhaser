import { CardModel } from "./CardModel.js";
import { CDBolinhaDeGolf } from "./CDBolinhaDeGolf.js";

export class Baralho extends CardModel {
    constructor(scene, x, y) {
        const img = "cartaTraz";
        super(scene, x, y, img);

        this.cardsFromBaralho = [];
        for (let i = 0; i < 6; i++) {
            this.cardsFromBaralho.push("CDBolinhaDeGolf");
        }
    }

    buyCardFromBaralho() {
        const opacidade = 0.7;
        if (this.cardsFromBaralho.length > 1) {
            const index = Math.floor(Math.random() * this.cardsFromBaralho.length);
            const card = this.getCardFromId(this.cardsFromBaralho[index]);
            this.cardsFromBaralho.splice(index, 1);
            return card;
        }else if(this.cardsFromBaralho.length == 1){
            const index = Math.floor(Math.random() * this.cardsFromBaralho.length);
            const card = this.getCardFromId(this.cardsFromBaralho[index]);
            this.cardsFromBaralho.splice(index, 1);
            this.alpha = opacidade;
            return card;
        }else{//nao tem mais carta
            this.alpha = opacidade;
            return null;
        }
    }

    getCardFromId(id) {
        switch (id) {
            case "CDBolinhaDeGolf":
                return new CDBolinhaDeGolf(this.scene, this.x, this.y);
        }
    }
}

