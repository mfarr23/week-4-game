$(document).ready(function() {
// Number of wins and losses that updates in html
var wins = 0;
$('#wins').html(wins);
var losses = 0;
$('#losses').html(losses);

// randomly generated score
var randomScore = [];
function randomScoreFunction(){
	randomScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
	// put random number in the html
	$('#randomNum').html(randomScore);
};

// tracks users current score
var userScore = 0;
// puts user score in correct html spot
$('#userScore').html(userScore);

// Assigns crystal a random value from 1 to 12
var C1 = Math.floor(Math.random() * 12) + 1;
var C2 = Math.floor(Math.random() * 12) + 1;
var C3 = Math.floor(Math.random() * 12) + 1;
var C4 = Math.floor(Math.random() * 12) + 1;
console.log(C1, C2, C3, C4);

// when a crystal is clicked, add value to userScore, and call checkScore function
$('#C1').click(function(){
	userScore = userScore + C1;
	$('#userScore').html(userScore);
	checkScoreNewGame();
});
$('#C2').click(function(){
	userScore = userScore + C2;
	$('#userScore').html(userScore);
	checkScoreNewGame();
});
$('#C3').click(function(){
	userScore = userScore + C3;
	$('#userScore').html(userScore);
	checkScoreNewGame();
});
$('#C4').click(function(){
	userScore = userScore + C4;
	$('#userScore').html(userScore);
	checkScoreNewGame();
});

// what is the relationship between userScore and randomScore
// change wins and losses and write them in proper area
// assign new random values to crystals
// run function to get new random score
// set userScore equal to 0 and start all over again
function checkScoreNewGame() {
	if (userScore === randomScore) {
		$('#status').html("You Won!!");
		wins++;
		$('#wins').html(wins);
		C1 = Math.floor(Math.random() * 12) + 1;
		C2 = Math.floor(Math.random() * 12) + 1;
		C3 = Math.floor(Math.random() * 12) + 1;
		C4 = Math.floor(Math.random() * 12) + 1;
		console.log(C1, C2, C3, C4);
		randomScoreFunction();
		console.log(randomScore);
		userScore = 0;
		$('#userScore').html(userScore);
	}
	else if (userScore > randomScore) {
		$('#status').html("You Lost :(");
		losses++;
		$('#losses').html(losses);
		C1 = Math.floor(Math.random() * 12) + 1;
		C2 = Math.floor(Math.random() * 12) + 1;
		C3 = Math.floor(Math.random() * 12) + 1;
		C4 = Math.floor(Math.random() * 12) + 1;
		console.log(C1, C2, C3, C4);
		randomScoreFunction();
		console.log(randomScore);
		userScore = 0;
		$('#userScore').html(userScore);		
	}
};

// call the functions
randomScoreFunction();
console.log(randomScore);

});

