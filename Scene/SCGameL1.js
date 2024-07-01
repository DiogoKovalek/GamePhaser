class SCGameL1 extends Phaser.Scene{
    constructor(){
        super("GameL1");
    }

    create(){
        const map = this.make.tilemap({
            key: "map1"
        });
        //Adicionando as camadas ===================================================
        const tilesetObjects = map.addTilesetImage("Overworld", "tiles"); // tile para preencher o mapa
        const tilesetFlower = map.addTilesetImage("Overworld", "tiles"); // Primeiro valor é o tileset, e nao a camada
        const tilesetBridge = map.addTilesetImage("Overworld", "tiles");
        const tilesetWater = map.addTilesetImage("Overworld", "tiles");
        const tilesetFloor = map.addTilesetImage("Overworld", "tiles");
        const tilesetGrass = map.addTilesetImage("Overworld", "tiles");
        const tilesetColider = map.addTilesetImage("Overworld", "tiles");
        //==========================================================================

        //inserindo camadas ========================================================
        // L -> Layer
        this.LColider = map.createLayer("Colider", tilesetColider, 0, 0); // insira a camada
        const LGrass = map.createLayer("Grass", tilesetGrass, 0, 0);
        const LFloor = map.createLayer("Floor", tilesetFloor, 0, 0);
        const LWater = map.createLayer("Water", tilesetWater, 0, 0);
        const LBridge = map.createLayer("Bridge", tilesetBridge, 0, 0);
        const LFlower = map.createLayer("Flower", tilesetFlower, 0, 0);
        const LObjects = map.createLayer("Objects", tilesetObjects, 0, 0);
        
        //Colisao
        this.LColider.setCollisionByProperty({Colider: true});

        //==========================================================================

        this.listEntidades = this.add.group(); // lista das entidades para os metodos
  
        //this.player = this.physics.add.sprite(40, 40, "player");
        this.player = new Player(this, 40, 40);
        this.physics.add.collider(this.player, this.LColider);
        
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0, map.width*16, map.height*16);

        this.cursorKeys = this.input.keyboard.createCursorKeys(); // recebe dados do teclado  

    }

    update(){

        for(var i = 0; i < this.listEntidades.getChildren().length; i++){
            var ent = this.listEntidades.getChildren()[i];
            ent.update();
        }

        //this.player.x += 1
        //this.movePlayer(this.player);
    }
    

    
}