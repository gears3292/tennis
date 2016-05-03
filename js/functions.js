var canvas;
var canvasContext;
var ballX = 25;
var ballSpeedX = 5; // change back to 5 when done
//var ballY = 345;
//var ballSpeedY = 5;
var playerOne;
var cpuOpponent;
var counter = 0;

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
  //ballY = ballY + ballSpeedY;
  if (ballX > canvas.width || ballX < 0) {
    ballSpeedX = -ballSpeedX;
    // console.log(counter += 1);
  }
  // else if (ballY > canvas.height || ballY < 0) {
  //   ballSpeedY = -ballSpeedY;
  // }

  if (ballX > playerOne) {
    ballSpeedX = -ballSpeedX;
  }
  //ballY = ballY + 3;
}

function drawEverything() {
  colorRect(0,0,canvas.width,canvas.height, '#101010'); // BG
  playerOne = colorRect(10,300, 10,100, '#22ddee'); // player's paddle
  cpuOpponent = colorRect(880,300, 10,100, '#ff2233'); // opponent's paddle
  //colorRect(ballX,345, 10,10, '#dddddd'); // ball
  canvasContext.fillStyle = '#eeeeee';
  canvasContext.beginPath();
  canvasContext.arc(ballX,345, 7, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function colorRect(leftX,topY, width,height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY, width,height);
}
