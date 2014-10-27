// Challenge summary:
// You will be implementing a countdown clock which take the number
// of seconds as parameter. In addition, you will also add 'confetti'
// to a random location on the page for each passing second.

// After you have completed the basic core components, there are a few
// optional features to work on:
// -- If seconds > 60, timer display should switch to minute:second.
// -- Include a warning when time is up (audio or visual).
// -- Display time in miliseconds.


// First, take a look at the index.html file to see the items you
// will need to work with.

// This function is the equivalent of document ready
$(function() {
	/* Hints:
	 		-- Start by registering the click event for the button.
	 		-- You will need to keep track of the number of second somewhere.
	 		-- Remember javascript function can be assigned into variable.
	 		-- Input values are strings, remember to parse it!
			-- Regex for checking digit input is '^\\d+$'
			-- Look up how setInterval() works, you will need it.
	*/
//    var startTime = parseInt(document.getElementById("time").value);
    var timer;
    var count = document.getElementById('countdownButton');
    count.addEventListener("click",function() {
        if (timer) {
            window.clearInterval(timer);
        }
        var startTime = Date.now();
        var totalTime = parseInt(document.getElementById("time").value);
        timer = window.setInterval(function () {
            var timeLeft = totalTime - (Math.floor((Date.now() - startTime) / 1000));
            $('#displayedTimer').text(timeLeft);
        }, 1000);
    });

});

function createConfetti() {
	// Get confetti's size. If user doesn't specify or type in invalid value, switch to a default size.


	//	Random color RGB, use Math.floor(Math.random() * 255)


	// Random locations on screen
	// Hint: use Math.floor, Math.random, window.innerHeight/Width to compute px value.


	// Add confetti and apply styles: width/height, location, background-color.
	// Hint: use fixed positioning with top & left attributes


	// [Optional]
	// Change the timer display's font color to the same as the last confetti's
	// background color. This is actually very simple (1-2 line of code).
	
	// [Optional]
	// Allow user to click on each confetti and remove it (1-2 line of code).
}