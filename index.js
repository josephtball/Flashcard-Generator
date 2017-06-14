var basicCard = require("./BasicCards/BasicCardGame.js");
var clozeCard = require("./ClozeCards/ClozeCardGame.js");
var inquirer = require("inquirer");

function gameSelect() {
	inquirer.prompt([
		{
			type: "list",
			name: "cardType",
			message: "What type of flashcard would you like to use for this game?",
			choices: ["Basic Flashcard", "Cloze Deletion Flashcard"],
		}
	]).then(function(answer) {
		if (answer.cardType === "Basic Flashcard") {
			new basicCard;
		} else {
			new clozeCard;
		}
	});
}
gameSelect();
