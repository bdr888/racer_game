// console.log("Linked!");

var player1div = document.getElementById("player1div");
console.log(player1);
var player2div = document.getElementById("player2div");
console.log(player2);
var counter1 = 0;
var counter2 = 0;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '39') {
        // right arrow - player 1
        console.log("checked right arrow!");
        counter1 ++;
        player1div.setAttribute("class", "clicked");
    }
    else if (e.keyCode == '70') {
        // "f" player 2
        console.log("checked f key!");
        counter2 ++;
        player2div.setAttribute("class", "clicked");
    }
}


// var movePlayer1 = function(){

// };

// var movePlayer2 = function(){

// };

// var clickNumber = 0;

// var checkWin1 = funcion(){

// };

// var checkWin2 = function(){

// };

    
// 	var clickNumber=0;  

// 	$('#board').find('td').on('click', function(){
// 	    if (clickNumber %2 === 0) {
// 	      this.innerHTML = "x";
// 	      this.setAttribute("class", "xClick");

// 	      // checkForWin('x');
// 	    	} else {
// 	      this.innerHTML = "o";
// 	      this.setAttribute("class", "oClick");
// 	      // checkForWin('o');
// 	   	}
// 	    clickNumber ++;
// 	    console.log(clickNumber);
// 	 });
	
// 	$('#reset').find('button').on('click', function() {
// 		$('td').removeClass('xClick oClick').addClass('blankState').html("");
// 		clickNumber = 0;
// 	});

// };



















// ok // Your game should have two pages: a landing page and a game page
// ok // Include separate HTML, CSS, JavaScript files
// // Choose an existing landing page on the web; screen shot the landing page, and replicate its design to create a separate game landing page that links to your game*
// ok // Style your landing page and game page with class-based CSS
// ok but need to test // Include a media query for a tablet to make your pages responsive

// // Your game page must have at least two player objects
// // Your game must have a clear win condition

// // Comment your code appropriately
// // Adhere to the AirBnB style guide for writing your JavaScript
// // Adhere to the Google style guide for writing your HTML/CSS