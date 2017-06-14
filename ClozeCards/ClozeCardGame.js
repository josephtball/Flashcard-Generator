var cardsObj = require("./ClozeCards.json");
var CardConstructor = require("./ClozeCardConstructor.js");
var basicCard = require("../BasicCards/BasicCardGame.js");
var inquirer = require("inquirer");

var cardsArr = cardsObj.cards;

var startGame = function() {
	for (var i = 0; i < cardsArr.length; i++) {
		var flashcard = new CardConstructor(cardsArr[i].text, cardsArr[i].cloze);
		cardsArr[i] = flashcard;
	}
	errorCheck();
	inquirer.prompt([
		{
			type: "confirm",
			name: "start",
			message: "Ready to start?",
			default: true
		}
	]).then(function(answer) {
		if (answer.start) {
			playRound();
		} else {
			console.log("To bad. We're starting anyway!");
			setTimeout(playRound, 2000);
		}
	});
}
module.exports = startGame;

function errorCheck() {
	for (var i = 0; i < cardsArr.length; i++) {
		if (!cardsArr[i].hasOwnProperty("partial")) {
			cardsArr.splice(i, 1);
			errorCheck();
		}
	}
}

function playRound() {
	console.log('~~~~~~~~~~ ########## ~~~~~~~~~~~');
	if (cardsArr.length > 0) {
		var randomindex = Math.floor(Math.random()*(cardsArr.length-1));
		cardsArr[randomindex].printFront();
		inquirer.prompt([
			{
				type: "confirm",
				name: "proceed",
				message: "Hit enter to show the back of the flashcard.",
				default: true
			}
		]).then(function(answer) {
			if (answer.proceed) {
				cardsArr[randomindex].printBack();
				cardsArr.splice(randomindex, 1);
				inquirer.prompt([
					{
						type: "confirm",
						name: "again",
						message: "Next Card?",
						default: true
					}
				]).then(function(answer) {
					if (answer.again) {
						playRound();
					} else {
						roundEnd();
					}
				});
			} else {
				roundEnd();
			}
		});
	} else {
		console.log("No flashcards left.");
		roundEnd();
	}
	
}

function roundEnd() {
	inquirer.prompt([
		{
			type: "list",
			name: "end",
			message: "What would you like to do next?",
			choices: ["Play with Basic Flashcards", "Quit Game"],
		}
	]).then(function(answer) {
		if (answer.end === "Quit Game") {
			console.log("Thank's for playing!");
		} else {
			new basicCard;
		}
	});
}