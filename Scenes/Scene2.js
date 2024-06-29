class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

    create(){
        // iniciando Background ==============================
        //this.background = this.add.image(0,0,"background");
        this.background = this.add.tileSprite(0,0,config.width, config.height, "background");
        this.background.setOrigin(0,0); // Ponto de referencia central da imagem, no caso superior esquerdo
        // ===================================================

        // iniciando Ships ===================================
        /*
        this.ship1 = this.add.image(config.width / 2 - 50, config.height / 2, "ship1");
        this.ship2 = this.add.image(config.width/2, config.height/2, "ship2");
        this.ship3 = this.add.image(config.width/2 + 50, config.height/2, "ship3");
        */

        this.player = this.physics.add.sprite(config.width/2 - 8, config.height -64, "player");
        this.player.play("player_anim");

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.player.setCollideWorldBounds(true); // evita sair da tela

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); // para o update do jogo
        this.projectiles = this.add.group(); //lista para update de classes


        this.input.on("gameobjectdown", this.destroyShip, this);

        /*
        this.ship1.setScale(2);   //Escala de imagem
        this.ship2.flipY = true;  //Espelhamento
        this.ship3.angle += 45;   //Angulo em graus
        */  

        //======================================================

        this.add.text(20,20, "Playing Game", {font: "25px Arial", fill:"yellow"});
    }

    update(){

        this.background.tilePositionY -= 0.5;

        this.movePlayerManager();

        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
            this.shootBeam();
        }

        for(var i = 0; i < this.projectiles.getChildren().length; i++){
            var beam = this.projectiles.getChildren()[i];
            beam.update();
        }

        
    }

    moveShip(ship, speed){
        ship.y += speed
        if(ship.y > config.height){
            this.resetShipPos(ship);
        }
    }

    resetShipPos(ship){
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, config.width);
        ship.x = randomX;
    }

    destroyShip(pointer, gameObject){
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }

    movePlayerManager(){
        if(this.cursorKeys.left.isDown){
            //this.player.setVelocityX(-gameSettings.playerSpeed);
            this.player.setVelocityX(-gameSettings.playerSpeed);
        }else if(this.cursorKeys.right.isDown){
            //this.player.setVelocityX(gameSettings.playerSpeed);
            this.player.setVelocityX(gameSettings.playerSpeed);
        }else{
            this.player.setVelocityX(0);
        }

        if(this.cursorKeys.up.isDown){
            this.player.setVelocityY(-gameSettings.playerSpeed);
        }else if(this.cursorKeys.down.isDown){
            this.player.setVelocityY(gameSettings.playerSpeed);
        }else{
            this.player.setVelocityY(0);
        }
        
    }

    shootBeam(){
        var beam = new Beam(this);
    }
}