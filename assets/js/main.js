var canvas = document.getElementById("main_canvas"); // Canvas, duh
var context = canvas.getContext("2d"); // I know we could use ctx, but for the sake of easy readability spelt it out

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

function drawBall() {
  context.beginPath();
  context.arc(x,y,10,0,Math.PI*2);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
} setInterval(draw, 10);
