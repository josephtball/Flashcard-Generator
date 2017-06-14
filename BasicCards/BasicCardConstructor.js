function BasicCard(front, back) {
	if (this instanceof BasicCard) {
		this.front = front;
		this.back = back;
		this.printFront = function() {
			console.log("Front of Flashcard:\n"+this.front);
		}
		this.printBack = function() {
			console.log("Back of Flashcard:\n"+this.back);
		}
	} else {
		return new BasicCard(front, back);
	}
}

module.exports = BasicCard;