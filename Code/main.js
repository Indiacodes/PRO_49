var player, playerImage;
var x = 100;
var y = 100; 

function preload(){
    playerImage = loadImage("Images/Gear.png");
}

function setup(){
    createCanvas(1440, 700)

    
    
}

function draw(){
    background(0);

    if(keyIsDown(LEFT_ARROW)){
        x -= 5;
    }

    if(keyIsDown(RIGHT_ARROW)){
        x += 5;
    }

    if(keyIsDown(DOWN_ARROW)){
        y += 5;
    }
    if(keyIsDown(UP_ARROW)){
        y -= 5;
    }

    player = createSprite(x, y, 10, 10);
    player.addImage(playerImage);
    player.scale = 0.4

    drawSprites();
}