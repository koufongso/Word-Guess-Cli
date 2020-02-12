var Letter = require("./Letter.js");

function Word(word) {
    this.remaining = 10;
    this.hideWord = new Set();     // use set to track hidden char
    this.typed = new Set();
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
        if (this.hideWord.delete(c)) {
            console.log("\x1b[32m", "\nCORRECT!");
            for (var i = 0; i < this.word.length; i++) {
                this.word[i].guess(c);
            }
        } else if (this.typed.has(c)) {
            console.log("This letter has been typed. Try another one.")
        } else{
            console.log("\x1b[31m", "\nINCORRECT!");
            console.log((--this.remaining) + " guesses remaining!");
        }
        this.typed.add(c);
    }

    this.isClear = function () {
        return (this.hideWord.size == 0);
    }

    this.isFail = function(){
        return this.remaining==0;
    }
}

module.exports = Word;