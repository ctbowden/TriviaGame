// Javascript Trivia Game
// Week 5 UNC Coding Camp
// By Charles Bowden


// Variables
// MusicTrivia Questions based on Rock n Roll Hall of Fame 2018 Inductees

var triviaQuestions = [
	{
		question: "First nominated in 2011, this band is most for hits like 'Living on a Prayer'?",
		choices: ["Bon Jovi", "The Cars", "J. Geils Band", "Depeche Mode"],
		answer: "Bon Jovi"
	}, {
		question: "You might think this band is already in the Rock Hall of Fame, but will 2018 be their Magic year?",
		choices: ["Bon Jovi", "The Cars", "J. Geils Band", "Depeche Mode"],
		answer: "The Cars"
	}, {
		question: "This artist's music not only influenced a younger generation, but also well established artists like Michael Jackson who cut 'Bad' after meeting him in person.",
		choices: ["Bon Jovi", "Rick James", "Judas Priest", "LL Cool J"],
		answer: "LL Cool J"
	}, {
		question: "It would be a sweet dream indeed if this duo were to make it into the Rock Hall on their first attempt",
		choices: ["Hall & Oates", "Eurythmics", "Outkast", "Daft Punk"],
		answer: "Eurythmics"
	}, {
		question: "Jeff Beck, Jimmy Page, Eric Clapton, Jimi Hedrix and many more cite this nominee as a huge influence thanks to his track 'Rumble'?",
		choices: ["Angus Young", "Slash", "Fats Domino", "Link Wray"],
		answer: "Link Wray"
	}
];


var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer = 30;
var intervalId;
var index = 0;

$(document).ready(function() {
//This Code starts the Game when user clicks
	$("#startgame").on("click", function() {
		runTime();
		quizTime();

	});	
});


function quizTime(index) {

	var header = triviaQuestions[index].question[index];
	$("#quiz").html("<h2>" + header + "</h2>");

	// var question = $("<h3>").append(triviaQuestions[index].question);
	// $("#quiz").append(question);

	// var answers = $("<p>").append(triviaQuestions[index].choices);
	// $("#quiz").append(answers);

	index++;

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


