

var character;
var obstacles;
var score;


// Draw the game on screen 

var playArea = {
    canvas : document.createElement("canvas"),

    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.width = window.innerHeight;
        this.canvas.getContext("2d");

        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    }
}