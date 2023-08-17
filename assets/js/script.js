

var character;
var obstacles;
var score;

// Onload event

function gameStart() {
    character = new component(30, 30, "red", 10, 120);
    character.gravity = 1;

    // Score will go here

    playArea.start();
}


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

    clear : function() {
        this.context.clearRect (0,0, this,canvas.width, this.canvas.height);
    }
}