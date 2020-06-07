
//Called every milisecond//
function Loop() {
    
}
//Starts the game
function startGame() {
    
}
var gravity = -9.81;

function Gravity() {
    //apply gravity
    this.y = this.y = gravity;
    setInterval(Loop, 1);
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.angle = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = color;
    ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
    ctx.restore();
  }
}

startGame();
setInterval(Loop, 1);
setInterval(Gravity, 1);
