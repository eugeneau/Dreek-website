var myMusic;
function startGame() {
  myMusic = new sound("https://dreek16designer.com/assets/gris.wav");
  myMusic.play();
  musicLoop();
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    } 
}
