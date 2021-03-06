/* 
===================
==== VARIABLES ==== 
===================
*/
var canvas = document.getElementById('gamecanvas');
var context = canvas.getContext('2d');

var gameStart = false;



/* 
===================
==== FUNCTIONS ==== 
===================
*/
//  Main Menu display. (TEXT)
function main_menu(){
    /* Main Title */
	context.font = "45px Courier";
	context.fillStyle = "#653789";
	context.textAlign = "center";
	context.fillText("HTML5 Game", canvas.width/2, canvas.height/2);
    
    /* Instructions */
	context.font = "15px Courier";
	context.fillText("Press ENTER To Start", canvas.width/2, canvas.height/2 + 35);
}

/*  Start game function. */
function startGame(){
	gameStart = true;
	clear();

    
/*  Interval = clears the canvas periodically */
	setInterval(function(){
		clear();
	}, 1000/30)
}

/* Clear function: Clears all things on canvas when called. */
function clear(){
	context.clearRect(0, 0, 1000, 1000);
	canvas.style.background = "red";
}









/*
=====================
===== Main Code =====
=====================
*/
/* Event listener: If ENTER is pressed... */
document.body.addEventListener("keydown", function(event){
    // If ENTER (keyCode 13) is pressed AND game is not started.
	if(event.keyCode == 13 && !gameStart){
		startGame(); // Run startGame
	}

});

/* Run main menu screen */
main_menu();