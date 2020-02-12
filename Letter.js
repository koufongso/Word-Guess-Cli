function Letter(char) {
    this.char = char;
    this.guessed = false;

    this.getChar = function () {
        return (this.guessed ? this.chr : "_");
    }

    this.guess = function (c) { if (char === c) { guessed = true; } }
}


module.exports = Letter;