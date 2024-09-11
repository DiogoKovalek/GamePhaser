class TextSCCardGame extends Phaser.Scene{

    constructor(){
        super("testeCarta");
    }

    preload ()
    {
        var caminho = "/Game/GameSpace/Assets/";
        this.load.image('card', caminho + "Cartas/BolinhaDeGolf.png");
    }

    create ()
    {
        //  Create a stack of random cards

        const sprCard = this.textures.get('card').getFrameNames();

        let x = 350;
        let y = 600;


        for (let i = 0; i < 3; i++)
            {
                const image = this.add.image(x, y, 'card').setInteractive();
    
                this.input.setDraggable(image);
    
                x += 50;
            }

        /*
        const card = this.add.image(x,y,"card").setInteractive();
        this.input.setDraggable(card);// adiciona a propriedade de dragDrop  
        */

        //  A drop zone
        const zone = this.add.zone(400, 250, 250, 250).setRectangleDropZone(250, 250);

        //  Just a visual display of the drop zone
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        this.input.on('dragstart', function (pointer, gameObject)
        {

            this.children.bringToTop(gameObject);

        }, this);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragenter', (pointer, gameObject, dropZone) =>
        {

            graphics.clear();
            graphics.lineStyle(2, 0x00ffff);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        });

        this.input.on('dragleave', (pointer, gameObject, dropZone) =>
        {

            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        });

        this.input.on('drop', (pointer, gameObject, dropZone) =>
        {

            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;

            gameObject.input.enabled = false;

        });

        this.input.on('dragend', (pointer, gameObject, dropped) =>
        {

            if (!dropped)
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }

            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        });

    }
}