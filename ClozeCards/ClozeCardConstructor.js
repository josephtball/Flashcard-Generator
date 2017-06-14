var ClozeCard = function(text, cloze) {
	if (this instanceof ClozeCard) {
		if (text.includes(cloze)) {
			this. fullText = text;
			this.cloze = cloze;
			this.partial = text.replace(cloze, "...");
			this.printFront = function() {
				console.log("Front of Flashcard:\n"+this.partial);
			}
			this.printBack = function() {
				console.log("Back of Flashcard:\n"+this.cloze);
			}
		} else {
			console.log("Error. Sentence does not include cloze.\n"+
						"Sentence: "+text+"\n"+
						"Cloze: "+cloze);
		}
	} else {
		return new ClozeCard(text, cloze);
	}
}

module.exports = ClozeCard;