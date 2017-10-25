// Javascript Trivia Game
// Week 5 UNC Coding Camp
// By Charles Bowden

// Variables
var musicTrivia = {
	q1: {
		question: "Which Duran Duran song opened with a sample of laughter from the keyboardist's girlfriend?",
		answerChoices: [
			"A. Is there something I should know?",
			"B. Hungry Like the Wolf",
			"C. Girls on Film",
			"D. Rio"
		],
		correctChoice: "B"
	},
	q2: {
		question: "The pencil-sketch animation technique used in the A-ha video Take On Me was known as what?",
		answerChoices: {
			A: "Onion Skinning",
			B: "Still Motion",
			C: "Pinscreen",
			D: "Rotoscoping",
		},
		correctChoice: "D"
	},
	q3: {
		question: "Which one of these songs by The Police did not chart in the 80s?",
		answerChoices: {
			A: "Don't Stand So Close to Me",
			B: "Every Breathe You Take",
			C: "Walking on the Moon",
			D: "Wrapped Around Your Finger",
		},
		correctChoice: "C"
	},
	q4: {
		question: "'Need You Tonight' was released by which rock band?",
		answerChoices: {
			A: "The Cure",
			B: "Metallica",
			C: "INXS",
			D: "Aerosmith",
		},
		correctChoice: "C"
	},
	q5: {
		question: "Which of the following bands is responsible for the hit, 'Breaking the Law'?",
		answerChoices: {
			A: "Rage Against the Machine",
			B: "Motorhead",
			C: "Judas Priest",
			D: "Slipknot",
		},
		correctChoice: "C"
	},
};



var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer = 30;
var intervalId;


//code starts on page load
window.onload = function() {

	runTime();

}

function runTime() {
	intervalId = setInterval(countdown, 1000);
}

function countdown() {
	//decrease timer
	timer--;
	
	// show timer on page
	$("#timer").html("<h2>" + timer + "</h2>");
	
	//stop function
	if (timer === 0) {
		// Run Times Up!
		timesUp();
	}

};

function timesUp() {
	//Sorry Times Up Screen
	alert("Times Up!");
	//Load Next Question Call

};

function letsPlay() {

}