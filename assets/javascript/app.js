// Javascript Trivia Game
// Week 5 UNC Coding Camp
// By Charles Bowden


// Variables
// MusicTrivia Questions based on Rock n Roll Hall of Fame 2018 Inductees
var musicTrivia = {
	q1: {
		question: "The pencil-sketch animation technique used in the A-ha video Take On Me was known as what?",
		answerChoices: [
			{
				choice: "Onion Skinning",
				value: false
			},
			{
				choice: "Still Motion",
				value: false
			},
			{
				choice: "Pinscreen",
				value: false
			},
			{
				choice: "Rotoscoping",
				value: true
			}]
	},
	q2: {
		question: "The pencil-sketch animation technique used in the A-ha video Take On Me was known as what?",
		answerChoices: [
			{
				choice: "Onion Skinning",
				value: false
			},
			{
				choice: "Still Motion",
				value: false
			},
			{
				choice: "Pinscreen",
				value: false
			},
			{
				choice: "Rotoscoping",
				value: true
			}]
	},
	q3: {
		question: "The pencil-sketch animation technique used in the A-ha video Take On Me was known as what?",
		answerChoices: [
			{
				choice: "Onion Skinning",
				value: false
			},
			{
				choice: "Still Motion",
				value: false
			},
			{
				choice: "Pinscreen",
				value: false
			},
			{
				choice: "Rotoscoping",
				value: true
			}]
	},
	q4: {
		question: "The pencil-sketch animation technique used in the A-ha video Take On Me was known as what?",
		answerChoices: [
			{
				choice: "Onion Skinning",
				value: false
			},
			{
				choice: "Still Motion",
				value: false
			},
			{
				choice: "Pinscreen",
				value: false
			},
			{
				choice: "Rotoscoping",
				value: true
			}]
	},
	q5: {
		question: "The pencil-sketch animation technique used in the A-ha video Take On Me was known as what?",
		answerChoices: [
			{
				choice: "Onion Skinning",
				value: false
			},
			{
				choice: "Still Motion",
				value: false
			},
			{
				choice: "Pinscreen",
				value: false
			},
			{
				choice: "Rotoscoping",
				value: true
			}]
	},
};



var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer = 30;
var intervalId;

$(document).ready(function() {
//This Code starts the Game when user clicks
	$("#startgame").on("click", function() {
		letsPlay();
	});	
});



// Function to initialize gameplay
function letsPlay() {
	$("#question").html("<h1>" +musicTrivia.q1.question + "</h1>");
	$("#Achoice").html("<h2>" + musicTrivia.q1.answerChoices[0].choice + "</h2>");
	$("#Bchoice").html("<h2>" + musicTrivia.q1.answerChoices[1].choice + "</h2>");
	$("#Cchoice").html("<h2>" + musicTrivia.q1.answerChoices[2].choice + "</h2>");
	$("#Dchoice").html("<h2>" + musicTrivia.q1.answerChoices[3].choice + "</h2>");
}


// Functions to Make the Countdown Clock Work
// Function to Begin Countdown by running the Countdown Function once each second
function runTime() {
	intervalId = setInterval(countdown, 1000);
}

// Function to provide countdown clock to trivia page 
function countdown() {
	//decrease timer
	timer--;
	// log to see what's wrong
	console.log(timer);
	// show timer on page
	$("#clock").html("<h2>" + timer + "</h2>");
	//stop function
	if (timer === 0) {
		// Run Times Up!
		timesUp();
	}
}

function timesUp() {
	// Stops the Countdown
	stopClock();
	//Sorry Times Up Screen
	alert("Times Up!");
	//Load Next Question Call

}
function stopClock() {
	// clears the intervalID and stops the countdown
	clearInterval(intervalId);
}


