var canvas;
var canvasContext;
var ballX = 25;
var ballY = 345;
var ballSpeedX = 5; // Increases horizontal speed
var ballSpeedY = 5;

var paddle1Y = 300;
var paddle2Y = 300;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;
function calcMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x:mouseX,
    y:mouseY
  };
}

window.onload = function() {
  //console.log('test');
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 60;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);

  canvas.addEventListener('mousemove',
    function(evt) {
      var mousePos = calcMousePos(evt);
      paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
    });
}

function ballReset() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
}

function moveEverything() {
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;
  if (ballX > canvas.width || ballX < 0) {
    if(ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT - 10) {
         ballSpeedX = -ballSpeedX;
       } else {
         ballReset();
       }
  }
  if (ballY > canvas.height || ballY < 0) {
     ballSpeedY = -ballSpeedY;
  }
}

function drawEverything() {
  colorRect(0,0,canvas.width,canvas.height, '#101010'); // BG
  colorRect(10,paddle1Y, PADDLE_THICKNESS,PADDLE_HEIGHT, '#22ddee'); // player's paddle
  colorRect(canvas.width - 20,paddle2Y,
            PADDLE_THICKNESS,PADDLE_HEIGHT, '#ff2233'); // opponent's paddle
  colorCircle(ballX, ballY, 10, '#eeeeee'); //draws the ball
}

function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX,centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function colorRect(leftX,topY, width,height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY, width,height);
}
