var Word = require("./Word.js");

var arr = ["apple", "horse", "cat", "mouse"];
var wordList = [];
for (var i = 0; i < arr.length; i++) {
    wordList.push(new Word(arr[i]));
}

wordList.forEach(i => console.log(i.getWord()));