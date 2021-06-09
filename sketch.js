const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var character1, character1Image;

function preload(){
    //character1Image = loadImage("Pigtail Shinobi Guy (Nara Shikamaru) (1).png")
}

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var character_options ={
        isStatic: true
    }

    character1 = Bodies.rectangle(200,390,200,20,character_options);
    //character1.addImage(character1Image);
    World.add(world,character1);
}

function draw(){
    background(0);
    Engine.update(engine);
    if(keyDown(UP_ARROW)){
        character1.y = character1.y - 5;
    }

    if(keyDown(DOWN_ARROW)){
        character1.y = character1.y + 5;
    }

    if(keyDown(LEFT_ARROW)){
        character1.x = character1.x - 5;
    }

    if(keyDown(RIGHT_ARROW)){
        character1.x = character1.x + 5;
    }

    rect(200,390,200,20);

    drawSprites();
}