// console.log("Linked!");

var player1div = document.getElementById("player1div");
var player2div = document.getElementById("player2div");
var counter1 = 0;
var counter2 = 0;
x = 10;
document.onkeydown = checkKey;
// var percentToMove1 = (counter1 * 10);
// var percentToMove2 = (counter2 * 10);


// first to 10 keystrokes (100% margin-left)
// reset counters and margins
function checkWin() {
	if (counter1 === 100) {
		alert("Player 1 wins!");
		counter1 = 0;
		counter2 = 0;
		player1.style.marginLeft = "10px";
		player2.style.marginLeft = "10px";
	} else if (counter2 === 100) {
		alert("Player 2 wins!");
		counter1 = 0;
		counter2 = 0;
		player1.style.marginLeft = "10px";
		player2.style.marginLeft = "10px";
	}
}

// listen to keys, 
// increment key counter, 
// add 10% margin-left to corresponding div, 
// check for win (margin-left = 100%). 
function checkKey(e) {

    page = e || window.event;

    if (page.keyCode === 39) {
        // right arrow - player 1
        // console.log("checked right arrow!");
        counter1 +=10;
        console.log("player 1 has moved " + counter1 + " times");
        player1.style.marginLeft = "+" + counter1 + "%";
		console.log("added " + counter1 + " % margin");
		checkWin();
    }
    else if (page.keyCode === 70) {
        // "f" player 2
        // console.log("checked f key!");
        counter2 +=10;
        console.log("player 2 has moved " + counter2 + " times");
        player2div.setAttribute("class", "clicked");
        player2.style.marginLeft = "+" + counter2 + "%";
        console.log("added " + counter2 + " % margin");
        checkWin();
    }
}

// ok // Your game should have two pages: a landing page and a game page
// ok // Include separate HTML, CSS, JavaScript files
// // Choose an existing landing page on the web; screen shot the landing page, and replicate its design to create a separate game landing page that links to your game*
// ok // Style your landing page and game page with class-based CSS
// ok but need to test // Include a media query for a tablet to make your pages responsive

// ok // Your game page must have at least two player objects
// ok // Your game must have a clear win condition

// // Comment your code appropriately
// // Adhere to the AirBnB style guide for writing your JavaScript
// // Adhere to the Google style guide for writing your HTML/CSS