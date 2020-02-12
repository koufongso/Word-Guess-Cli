var Letter = require("./Letter.js");

function Word(word) {
    this.word = new Array(word.length);
    for (var i = 0; i < word.length; i++) {
        this.word[i] = new Letter(word[i]);
    }

    this.getWord = function () {
        var output = "";
        for (var i = 0; i < this.word.length; i++) {
            output += this.word[i].getChar()+" ";
        }
        return output;
    }

    this.guess = function (c) {
        for (var i = 0; i < this.word.length; i++) {
            this.word[i].guess();
        }
    }
}

module.exports = Word;