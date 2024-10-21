export class Card {
    constructor(scene, id, nome, lv) {
        let cardData = scene.cache.json.get('CardAttributes')[nome]; //Pega a carta no json
        //console.log(cardData);
        if (cardData) {
            let cardInfo = cardData.level[lv]; //Pega a carta pelo lv
            //console.log(cardInfo);
            if(cardInfo){
                this.id = id;
                this.nome = nome;
                this.lv = lv; // Level
                this.hp = cardInfo.hp; // vida
                this.atk = cardInfo.atk; // ataque
                this.time = cardData.time; // turnos para ataque
                this.img = cardData.img; // imagem     
            }
        }
    }
}