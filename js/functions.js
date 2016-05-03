var canvas;
var canvasContext;
var ballX = 25;
var ballSpeedX = 5;
var ballY = 345;
var ballSpeedY = 5;

window.onload = function() {
  //console.log('test');
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 60;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);
}

function moveEverything() {
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;
  if (ballX > canvas.width || ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballY > canvas.height || ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
  //ballY = ballY + 3;
}

function drawEverything() {
  colorRect(0,0,canvas.width,canvas.height, '#101010'); // BG
  colorRect(10,300, 10,100, '#22ddee'); // player's paddle
  colorRect(880,300, 10,100, '#ff2233'); // opponent's paddle
  colorRect(ballX,ballY, 10,10, '#dddddd'); // ball
}

function colorRect(leftX,topY, width,height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY, width,height);
}
