// var player1 = document.getElementById("player1");
// var player2 = document.getElementById("player2");
var counter1 = 0;
var counter2 = 0;
document.onkeydown = checkKey;

// checks for first to 9 keystrokes (increments by 10)
// alerts winner
// resets counters and margins
function checkWin() {
	if (counter1 === 90) {
		alert("Sen escapes!");
		counter1 = 0;
		counter2 = 0;
		player1.style.marginLeft = "10px";
		player2.style.marginLeft = "10px";
	} else if (counter2 === 90) {
		alert("No-Face wins!");
		counter1 = 0;
		counter2 = 0;
		player1.style.marginLeft = "10px";
		player2.style.marginLeft = "10px";
	}
}

// listen to keys, 
// increment key counter by 10, 
// add 10% margin-left to corresponding div, 
// calls check for win function. 
function checkKey(e) {

    page = e || window.event;

    if (page.keyCode === 39) {
        // right arrow - player 1
        counter1 +=10;
        player1.style.marginLeft = "+" + counter1 + "%";
		console.log("Player 1 has moved " + counter1/10 + " times. Margin = " + counter1 + " %.");
		checkWin();
    }
    else if (page.keyCode === 70) {
        // "f" player 2
        counter2 +=10;
        player2.style.marginLeft = "+" + counter2 + "%";
		console.log("Player 2 has moved " + counter2/10 + " times. Margin = " + counter2 + " %.");
        checkWin();
    }
}

// function reset() {
// 	var reset = document.getElementById("reset").on("click", function() {
// 		counter1 = 0;
// 		counter2 = 0;
// 		player1.style.marginLeft = "10px";
// 		player2.style.marginLeft = "10px";
// 	});


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