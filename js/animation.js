var canvas = document.getElementById('container');
var clone = document.getElementById('blurCanvasBottom');

var cloneCtx = clone.getContext('2d');
var ctx = canvas.getContext('2d');

var ww = $("#home").outerWidth(true);
var wh = $("#home").outerHeight(false);
canvas.width = ww;
canvas.height= wh;
var partCount = 5;
var particles = [];

var switchColor = false;
function particle(){
  if(switchColor= !switchColor)
	this.color = 'rgba(168,43,0,'+ (Math.random()+.2)+')';
  else
	this.color = 'rgba(69,142,0,'+(Math.random()+.2)+')';
  console.log(this.color);
  this.x = randomInt(0,ww);
  this.y = randomInt(0,wh);
  this.direction = {
    "x": -1 + Math.random() * 2,
    "y": -1 + Math.random() * 2
  };
  this.vx = 2.3 * Math.random();
  this.vy = 2.3 * Math.random();
  this.radius = randomInt(2,100);
  this.float = function(){
    this.x += this.vx * this.direction.x;
    this.y += this.vy * this.direction.y;
  };
  this.changeDirection = function (axis) {
    this.direction[axis] *= -1;
  };
  this.boundaryCheck = function () {
            if (this.x >= ww) {
                this.x = ww;
                this.changeDirection("x");
            } else if (this.x <= 0) {
                this.x = 0;
                this.changeDirection("x");
            }
            if (this.y >= wh) {
                this.y = wh;
                this.changeDirection("y");
            } else if (this.y <= 0) {
                this.y = 0;
                this.changeDirection("y");
            }
        };
  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius  , 0, Math.PI * 2, false);
    ctx.fill();
  };
}
function clearCanvas() {
 
 cloneCtx.clearRect(0, 0, ww, wh);
 ctx.clearRect(0, 0, ww, wh);
}
function createParticles(){
  if(ww * wh < 400000 )
	  var partCount = 10;
  else if(ww * wh > 400000 )
	  var partCount = 20;
  
  for (i=0;i<partCount;i++){
    var p = new particle();
    particles.push(p);
  }
}
function drawParticles() {
   for (i=0;i<particles.length;i++) {
     p = particles[i];
     p.draw();
   }
}
function updateParticles() {
        for (var i = particles.length - 1; i >= 0; i--) {
            p = particles[i];
            p.float();
            p.boundaryCheck();
        }
}
createParticles();
drawParticles();
function animateParticles() {
        clearCanvas();
        drawParticles();
        updateParticles();
        cloneCtx.drawImage(canvas, 0, 0);
        requestAnimationFrame(animateParticles);
    }
requestAnimationFrame(animateParticles);
cloneCtx.drawImage(canvas, 0, 0);

$(window).on('resize',function(){
  ww = $("#home").outerWidth(true);
  wh = $("#home").outerHeight(false); 
  canvas.width = ww;
  canvas.height= wh;
  clearCanvas();
  particles = [];
  createParticles();
  drawParticles();
});

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function velocityInt(min,max)
{
    return Math.random()*(max-min+1)+min;
}

