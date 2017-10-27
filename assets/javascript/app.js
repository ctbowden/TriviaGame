// Javascript Trivia Game
// Week 5 UNC Coding Camp
// By Charles Bowden


// Variables
// MusicTrivia Questions based on Rock n Roll Hall of Fame 2018 Inductees

var triviaQuestions = [
	{
		question: "First nominated in 2011, this band is most for hits like 'Living on a Prayer'?",
		choices: ["Bon Jovi", "The Cars", "J. Geils Band", "Depeche Mode"],
		answer: "Bon Jovi",
		picture: '<img class="bandpic" src="assets/images/bonjovi.jpg">'
	}, {
		question: "You might think this band is already in the Rock Hall of Fame, but will 2018 be their Magic year?",
		choices: ["Bon Jovi", "The Cars", "J. Geils Band", "Depeche Mode"],
		answer: "The Cars",
		picture: '<img class="bandpic" src="assets/images/thecars.jpg">'
	}, {
		question: "This artist's music not only influenced a younger generation, but also well established artists like Michael Jackson who cut 'Bad' after meeting him in person.",
		choices: ["Bon Jovi", "Rick James", "Judas Priest", "LL Cool J"],
		answer: "LL Cool J",
		picture: '<img class="bandpic" src="assets/images/llcoolj.jpg">'
	}, {
		question: "It would be a sweet dream indeed if this duo were to make it into the Rock Hall on their first attempt",
		choices: ["Hall & Oates", "Eurythmics", "Outkast", "Daft Punk"],
		answer: "Eurythmics",
		picture: '<img class="bandpic" src="assets/images/eurythmics.png">'
	}, {
		question: "Jeff Beck, Jimmy Page, Eric Clapton, Jimi Hedrix and many more cite this nominee as a huge influence thanks to his track 'Rumble'?",
		choices: ["Angus Young", "Slash", "Fats Domino", "Link Wray"],
		answer: "Link Wray",
		picture: '<img class="bandpic" src="assets/images/linkwraybeach.jpg">'
	}
];


var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer;
var intervalId;
var index = 0;

$(document).ready(function() {
//This Code starts the Game when user clicks
	$("#startgame").on("click", function() {
		buildQuizBoard();



	});	
});


function buildQuizBoard() {
	// Clear Timers
	stopClock();
	// Clear the Quiz Div Area
	$("#quiz").empty();
	// Build the Question Div
	$("#quiz").html("<h1> " + triviaQuestions[index].question);
	// Build Answer Choices
	for (var i = 0; i < 4; i++) {
		
		// Generate buttons for Answer Choices
		var ans = $("<button>");
		ans.addClass("answers")
		// add ID = String of name of answer choice
		ans.attr("name", triviaQuestions[index].choices[i]);
		//Giving button text
		ans.text(triviaQuestions[index].choices[i]);
		// Insert into HTML
		$("#quiz").append(ans)
	}
	//enable the buttons
	gameLogic();
	//start the timer
	runTime();
}



// Functions to Make the Countdown Clock Work
// Function to Begin Countdown by running the Countdown Function once each second
function runTime() {
	timer = 30;
	intervalId = setInterval(countdown, 1000);
}

function pause() {
	timer = 3;
	intervalId = setInterval(buildQuizBoard, 1000)
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
		timesUp();
	}
}

function timesUp() {
	// Stops the Countdown
	stopClock();
	//Empty the Div
	$("#quiz").empty();
	//Sorry Times Up Screen
	$("#quiz").append('<img id="onLoss" src="assets/images/maxresdefault.jpg">');
	// Increase the Unanswered Questions total
	unanswered++;
	// Call for the Next Question
	nextQuestion();
}

function stopClock() {
	// clears the intervalID and stops the countdown
	clearInterval(intervalId);
}

function nextQuestion() {
	//increase the index
	index++;
	// pausing before loading next question
	setTimeout(function() {
		//determining whether to load next question or score
		if (index < triviaQuestions.length) {
			// If more questions exist
			buildQuizBoard();
		} else {
			results();
		}
	}, 5000);
}

// Winner!
function winner() {
	//Increase Correct
	correct++;
	//Empty the Div
	$("#quiz").empty();
	//Awesome Job
	$("#quiz").append("<h1>That's Correct!</h1>");
	//Title the Div with Correct Answer
	$("#quiz").append("<h1>Correct Answer: " + triviaQuestions[index].answer +"</h1>");
	// Display Image of Artist
	$("#quiz").append(triviaQuestions[index].picture);
	//Call for Next Question
	nextQuestion();
}

// Loser!
function loser() {
	//Increase Wrong
	wrong++;
	//Empty the Div
	$("#quiz").empty();
	//We're Sorry
	$("#quiz").append("<h1>We're Sorry but ... </h1>");
	//Title the Div with Correct Answer
	$("#quiz").append("<h2>Correct Answer: " + triviaQuestions[index].answer +"</h2>");
	// Display Image of Artist
	$("#quiz").append(triviaQuestions[index].picture);
	//Call for Next Question
	nextQuestion();
}

function gameLogic() {
	// Game Logic
	$("button").on("click", function(event) {
	var userChoice = $(this).attr("name");
	if (userChoice === triviaQuestions[index].answer) {
		winner();
		} else {
		loser();
		}
	});
}

function results() {
	stopClock();
	//Empty the Div
	$("#quiz").empty();
	$("#clock").empty();
	//Number of Questions
	$("#quiz").append("<h2>Total Number of Questions:  " + index + "</h2>");
	//Number of Questions Correct
	$("#quiz").append("<h2>Correct Answers:  " + correct + "</h2>");
	//Number of Questions Wrong
	$("#quiz").append("<h2>Wrong Answers:  " + wrong + "</h2>");
	//Number of Questions Unanswered
	$("#quiz").append("<h2>Unanswered Questions:  " + unanswered + "</h2>");
}