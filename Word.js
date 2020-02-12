var Letter = require("./Letter.js");

function Word(word) {
    this.hideWord = new Set();     // use set to track hidden char
    this.word = new Array(word.length); // use array to store letter object
    for (var i = 0; i < word.length; i++) {
        this.word[i] = new Letter(word[i]);
        this.hideWord.add(word[i]);
    }

    this.getWord = function () {
        var output = "";
        for (var i = 0; i < this.word.length; i++) {
            output += this.word[i].getChar() + " ";
        }
        return output;
    }

    this.guess = function (c) {
        if(this.hideWord.delete(c)){
            console.log("Correct!");
            for(var i=0; i<this.word.length; i++){
                this.word[i].guess(c);
            }
        }
    }

    this.isClear = function () {
        return (this.hideWord.size==0);
    }
}

module.exports = Word;