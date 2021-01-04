const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    block1 = new Block(700,320,70,70);
    block2 = new Block(920,320,70,70);
    

    block3 = new Block(700,240,70,70);
    block4 = new Block(920,240,70,70);
    
    block5 = new Block(920,240,70,70);
    
    block6 = new Block(920,240,70,70);
    
    block7 = new Block(920,240,70,70);
    
    block8 = new Block(920,240,70,70);
    
    
    block9 = new Block(700,240,70,70);
    
    block10 = new Block(700,240,70,70);
    
    block11= new Block(700,240,70,70);
    
    block12= new Block(700,240,70,70);


    block13 = new Block(810,160,70,70);


    ball = new Ball(100,100,75);
chain=new Chain(ball.body,{x:500,y:70});

}

function draw(){
    background("purple");
    Engine.update(engine);
    
    block1.display();
    block2.display();
    ground.display();
    

    block3.display();
    block4.display();
    

    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();

    

    


    
    chain.display();

    ball.display();
    
}
