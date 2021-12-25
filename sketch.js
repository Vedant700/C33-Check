const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "play";
var engine, world;
var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25;
var main_ground;
var div1, div2, div3, div4, div5, div6, div7;
var score = 0;
var turn = 0;
var d300l, d400l, d500l;
var d500r, d400r, d300r;
var particle;

function setup() {
  createCanvas(440, 800);
  // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  //row1
  d1 = new Particles(155, 100, 20, 20);
  d2 = new Particles(205, 100, 20, 20);
  d3 = new Particles(255, 100, 20, 20);

  //row2
  d4 = new Particles(125, 140, 20, 20);
  d5 = new Particles(175, 140, 20, 20);
  d6 = new Particles(225, 140, 20, 20);
  d7 = new Particles(280, 140, 20, 20);

  //row3
  d8 = new Particles(95, 180, 20, 20);
  d9 = new Particles(145, 180, 20, 20);
  d10 = new Particles(195, 180, 20, 20);
  d11 = new Particles(245, 180, 20, 20);
  d12 = new Particles(300, 180, 20, 20);

  //row4
  d13 = new Particles(70, 220, 20, 20);
  d14 = new Particles(120, 220, 20, 20);
  d15 = new Particles(170, 220, 20, 20);
  d16 = new Particles(220, 220, 20, 20);
  d17 = new Particles(270, 220, 20, 20);
  d18 = new Particles(325, 220, 20, 20);

  //row5
  d19 = new Particles(50, 260, 20, 20);
  div1 = new Divisions(35, 420, 5, 275)

  d20 = new Particles(100, 260, 20, 20);
  div2 = new Divisions(90, 420, 5, 275)

  d21 = new Particles(150, 260, 20, 20);
  div3 = new Divisions(135, 420, 5, 275)

  d22 = new Particles(200, 260, 20, 20);
  div4 = new Divisions(185, 420, 5, 275)

  d23 = new Particles(250, 260, 20, 20);
  div5 = new Divisions(235, 420, 5, 275)

  d24 = new Particles(300, 260, 20, 20);
  div6 = new Divisions(285, 420, 5, 275)

  d25 = new Particles(340, 260, 20, 20);
  div7 = new Divisions(340, 420, 5, 275)

  main_ground = new Ground(187, 560, 311, 5);

  d300l = new Score_divs(62, 555, 50, 5);
  d400l = new Score_divs(113, 555, 39, 5);
  d500l = new Score_divs(158, 555, 47, 5);
  d500r = new Score_divs(210, 555, 43, 5);
  d400r = new Score_divs(260, 555, 43, 5);
  d300r = new Score_divs(313, 555, 48, 5);


}

function mousePressed() {
  if (gameState !== "end") {
    score++
    particle = new Plinko(mouseX, 10, 10, 5);
  }
}

function draw() {
  background(20, 33, 61);
  d300l.display();
  d400l.display();
  d500l.display();
  d500r.display();
  d400r.display();
  d300r.display();

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();
  d9.display();
  d10.display();
  d11.display();
  d12.display();
  d13.display();
  d14.display();
  d15.display();
  d16.display();
  d17.display();
  d18.display();
  d19.display();
  d20.display();
  d21.display();
  d22.display();
  d23.display();
  d24.display();
  d25.display();
  main_ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();

  mousePressed();
  particle.display();

  textSize(20)
  fill(255, 165, 0)
  text(500, 193, 300);

  textSize(20)
  fill(255, 165, 0)
  text(500, 143, 300);

  textSize(20)
  fill(0, 150, 199)
  text(400, 95, 300);

  textSize(20)
  fill(0, 128, 0)
  text(300, 43, 300);

  textSize(20)
  fill(0, 150, 199)
  text(400, 243, 300);

  textSize(20)
  fill(0, 128, 0)
  text(300, 295, 300);

  textSize(15)
  fill(255, 165, 0)
  text("Score: " + score, 320, 30)



  drawSprites();
}

