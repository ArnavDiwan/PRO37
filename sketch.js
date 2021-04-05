var canvas;
var gameState = 0; 
var contestantCount;
var database1, quiz, question, contestant;

function setup(){
  database1 = firebase.database();
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  contestant.display();
}


function draw(){
  background("pink");

  
}
