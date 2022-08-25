


var url = 'http://localhost:8080/sonuc';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();
var ananus = JSON.parse(xhr.responseText);



var burl = 'http://localhost:8080/sonuc2';
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', burl, false);
xhr2.send();
var babanus = JSON.parse(xhr2.responseText);



let game;

let gameOptions = {

  
    slices: ananus,

   
    rotationTimeRange: {
        min: 3000,
        max: 4500
    },


    wheelRounds: {
        min: 2,
        max: 11
    },

    
    backSpin: {
        min: 1,
        max: 4
    },


    wheelRadius: 240,


    strokeColor: 0xffffff,


    strokeWidth: 5
}


window.onload = function() {

 
    let gameConfig = {
        

     
        scale: {
            type: Phaser.AUTO,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "thegame",
            width: 1300,
            height: 800
        },

       
       backgroundColor: 0xffffff,

     
       scene: [playGame]
    };

    
    game = new Phaser.Game(gameConfig);


    window.focus()
}

var platforms;

class playGame extends Phaser.Scene{


    constructor(){
        super("PlayGame");
    }


    preload(){
  


        this.load.image('ground', 'giphy.gif');

        this.load.image("pin", "pin.png");
        this.load.spritesheet('ms', 'banko.png', { frameWidth: 325, frameHeight: 400, endFrame: 4 });

     
        this.load.spritesheet("icons", "icons.png", {
            frameWidth: 256,
            frameHeight: 256
        });

    }

    


    create(){

        var config = {
            key: 'explodeAnimation',
            frames: this.anims.generateFrameNumbers('ms', { start: 0, end: 3, first: 1 }),
            frameRate: 7,
            repeat: -1
        };
        this.anims.create(config);
        var sprite = this.add.sprite(0, 0, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(325, 0, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(650, 0, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(975, 0, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1300, 0, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1635, 0, 'explosion').play('explodeAnimation');

        var sprite = this.add.sprite(0, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(325, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(650, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(975, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1300, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1635, 200, 'explosion').play('explodeAnimation');



        var sprite = this.add.sprite(325, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(0, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(650, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(975, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1300, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1635, 400, 'explosion').play('explodeAnimation');



        var sprite = this.add.sprite(325, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(0, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(650, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(975, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1300, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1635, 600, 'explosion').play('explodeAnimation');



        var sprite = this.add.sprite(325, 800, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(0, 800, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(650, 800, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(975, 800, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1300, 800, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1635, 800, 'explosion').play('explodeAnimation');

        var sprite = this.add.sprite(325, 1000, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(0, 1000, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(650, 1000, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(975, 1000, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1300, 1000, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1635, 1000, 'explosion').play('explodeAnimation');



  
       


        /*var sprite = this.add.sprite(1295, 300, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(185, 300, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(370, 300, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(555, 300, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(740, 300, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(925, 300, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1110, 300, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1295, 300, 'explosion').play('explodeAnimation');


        var sprite = this.add.sprite(1295, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(185, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(370, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(555, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(740, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(925, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1110, 200, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1295, 200, 'explosion').play('explodeAnimation');



        var sprite = this.add.sprite(1295, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(185, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(370, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(555, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(740, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(925, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1110, 400, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1295, 400, 'explosion').play('explodeAnimation');


        var sprite = this.add.sprite(1295, 500, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(185, 500, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(370, 500, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(555, 500, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(740, 500, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(925, 500, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1110, 500, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1295, 500, 'explosion').play('explodeAnimation');



        var sprite = this.add.sprite(1295, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(185, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(370, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(555, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(740, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(925, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1110, 600, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1295, 600, 'explosion').play('explodeAnimation');




        var sprite = this.add.sprite(1295, 700, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(185, 700, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(370, 700, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(555, 700, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(740, 700, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(925, 700, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1110, 700, 'explosion').play('explodeAnimation');
        var sprite = this.add.sprite(1295, 700, 'explosion').play('explodeAnimation');
        */



   

        


  

        let startDegrees = -90;


        let graphics = this.make.graphics({
            x: 0,
            y: 0,
            add: false
        });

        
        this.allowedDegrees = [];


        this.wheelContainer = this.add.container(game.config.width / 2, game.config.height / 2);


        let iconArray = [];

        
        for(let i = 0; i < gameOptions.slices.length; i++){


            if(gameOptions.slices[i].enabled){


                for(let j = 0; j < gameOptions.slices[i].degrees; j ++){
                    this.allowedDegrees.push(270 - startDegrees - j);
                }
            }

            let startColor = Phaser.Display.Color.ValueToColor(gameOptions.slices[i].startColor);
            let endColor = Phaser.Display.Color.ValueToColor(gameOptions.slices[i].endColor)

            for(let j = gameOptions.slices[i].rings; j > 0; j--){

            
                let ringColor = Phaser.Display.Color.Interpolate.ColorWithColor(startColor,endColor, gameOptions.slices[i].rings, j);


                let ringColorString = Phaser.Display.Color.RGBToString(Math.round(ringColor.r), Math.round(ringColor.g), Math.round(ringColor.b), 0, "0x");

          
                graphics.fillStyle(ringColorString, 1);

             
                graphics.slice(gameOptions.wheelRadius + gameOptions.strokeWidth, gameOptions.wheelRadius + gameOptions.strokeWidth, j * gameOptions.wheelRadius / gameOptions.slices[i].rings, Phaser.Math.DegToRad(startDegrees), Phaser.Math.DegToRad(startDegrees + gameOptions.slices[i].degrees), false);

      
                graphics.fillPath();
            }

    
            graphics.lineStyle(gameOptions.strokeWidth, gameOptions.strokeColor, 1);

           
            graphics.slice(gameOptions.wheelRadius + gameOptions.strokeWidth, gameOptions.wheelRadius + gameOptions.strokeWidth, gameOptions.wheelRadius, Phaser.Math.DegToRad(startDegrees), Phaser.Math.DegToRad(startDegrees + gameOptions.slices[i].degrees), false);

        
            graphics.strokePath();

            if(gameOptions.slices[i].iconFrame != undefined){

                
                let icon = this.add.image(gameOptions.wheelRadius * 0.75 * Math.cos(Phaser.Math.DegToRad(startDegrees + gameOptions.slices[i].degrees / 2)), gameOptions.wheelRadius * 0.75 * Math.sin(Phaser.Math.DegToRad(startDegrees + gameOptions.slices[i].degrees / 2)), "icons", gameOptions.slices[i].iconFrame);

                icon.scaleX = gameOptions.slices[i].iconScale;
                icon.scaleY = gameOptions.slices[i].iconScale;

              
                icon.angle = startDegrees + gameOptions.slices[i].degrees / 2 + 90;

      
                iconArray.push(icon);
            }

        
            if(gameOptions.slices[i].sliceText != undefined){

                
                let text = this.add.text(gameOptions.wheelRadius * 0.75 * Math.cos(Phaser.Math.DegToRad(startDegrees + gameOptions.slices[i].degrees / 2)), gameOptions.wheelRadius * 0.75 * Math.sin(Phaser.Math.DegToRad(startDegrees + gameOptions.slices[i].degrees / 2)), gameOptions.slices[i].sliceText, gameOptions.slices[i].sliceTextStyle);


                text.setOrigin(0.5, 0);

       
                text.angle = startDegrees + gameOptions.slices[i].degrees / 2 + 90;

              
                if(gameOptions.slices[i].sliceTextStroke && gameOptions.slices[i].sliceTextStrokeColor){
                    text.setStroke(gameOptions.slices[i].sliceTextStrokeColor, gameOptions.slices[i].sliceTextStroke);
                }

   
                iconArray.push(text);
            }

            
            startDegrees += gameOptions.slices[i].degrees;

        }

        graphics.generateTexture("wheel", (gameOptions.wheelRadius + gameOptions.strokeWidth) * 2, (gameOptions.wheelRadius + gameOptions.strokeWidth) * 2);


        let wheel = this.add.sprite(0, 0, "wheel");


        this.wheelContainer.add(wheel);


        this.wheelContainer.add(iconArray);

     
        this.pin = this.add.sprite(game.config.width / 2, game.config.height / 2, "pin");

       
        this.prizeText = this.add.text(game.config.width / 2, game.config.height - 20, "Çarkı Çevir", {
            font: "bold 32px Arial",
            align: "center",
            color: "white"
        });


        this.prizeText.setOrigin(0.5);


        this.canSpin = true;

        this.input.on("pointerdown", this.spinWheel, this);
    }

 
    spinWheel(){

        if(this.canSpin){

       
            this.prizeText.setText("");


            let rounds = Phaser.Math.Between(gameOptions.wheelRounds.min, gameOptions.wheelRounds.max);

            
            let degrees = babanus;
            console.log(Phaser.Utils.Array.GetRandom(this.allowedDegrees));

        
            let backDegrees = Phaser.Math.Between(gameOptions.backSpin.min, gameOptions.backSpin.max);

 
            let prizeDegree = 0;

            for(let i = gameOptions.slices.length - 1; i >= 0; i--){

                prizeDegree += gameOptions.slices[i].degrees;

                if(prizeDegree > degrees){

                  
                    var prize = i;
                    break;
                }
            }

   
            this.canSpin = false;

            this.tweens.add({

       
                targets: [this.wheelContainer],

        
                angle: 360 * rounds + degrees + backDegrees,

               
                duration: Phaser.Math.Between(gameOptions.rotationTimeRange.min, gameOptions.rotationTimeRange.max),

               
                ease: "Cubic.easeOut",

                
                callbackScope: this,

                onComplete: function(tween){


                    this.tweens.add({
                        targets: [this.wheelContainer],
                        angle: this.wheelContainer.angle - backDegrees,
                        duration: Phaser.Math.Between(gameOptions.rotationTimeRange.min, gameOptions.rotationTimeRange.max) / 2,
                        ease: "Cubic.easeIn",
                        callbackScope: this,
                        onComplete: function(tween){

                       
                            this.prizeText.setText(gameOptions.slices[prize].text);

                            
                            this.canSpin = true;
                        }
                    })
                }
            });
        }
    }
}
