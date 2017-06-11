var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

var userCard = {};

// prompt user if they want a basic or cloze delete flashcard
var flashcard = {
	flashcardInfo: function() {
		inquirer.prompt([
			{
				type: "list",
				name: "cardType",
				message: "What type of flashcard would you like to make?",
				choices: ["Basic Flashcard", "Cloze Deletion Flashcard"],
			}
		]).then(function(answer) {
			console.log("----------");
			if (answer.cardType === "Basic Flashcard") {
				flashcard.basic();
			} else {
				flashcard.cloze();
			}
		});
	},
	basic: function() {
		inquirer.prompt([
			{
				type: "input",
				name: "front",
				message: "What would you like the front of your flashcard to say?",
			},
			{
				type: "input",
				name: "back",
				message: "What would you like the back of your flashcard to say?",
			}
		]).then(function(answer) {
			console.log("----------");
			userCard = new BasicCard(answer.front, answer.back);
			flashcard.cardReturn();
		});
	},
	cloze: function() {

	},
	cardReturn: function() {
		console.log("Card Front: "+userCard.front);
		inquirer.prompt([
			{
				type: "confirm",
				name: "reveal",
				message: "Reveal back of card?",
			}
		]).then(function(answer) {
			console.log("Card Back: "+userCard.back);
		});
	}
}

flashcard.flashcardInfo();

// if basic flashcard prompt user for font of card info and back of card info
// use front and back to construct a basic flashcard

// if cloze delete flashcard prompt user for full sentence and cloze deletion
// use full sentence and cloze deletion to construct cloze delete flashcard

// return flashcard to user
// prompt to reveal answer