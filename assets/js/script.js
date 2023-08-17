

var character;
var obstacles;
var score;


// Draw the game on screen 

var playArea = {
    canvas : document.createElement("canvas");

    start : function() {
        this.canvas.width = window.innerWidth;
    }
}