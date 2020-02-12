function Letter(char) {
    this.char = char;
    this.guessed = false;

    this.getChar = function () {
        return (this.guessed ? this.char : "_");
    }

    this.guess = function (c) {
        // console.log("call letter.guess:");
        // console.log(char + " " + c)
        if (this.char === c) {
            this.guessed = true;
        }
        return this.guessed;
    }
}


module.exports = Letter;