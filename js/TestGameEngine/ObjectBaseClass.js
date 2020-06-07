
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


startGame();
setInterval(Loop, 1);
setInterval(Gravity, 1);
