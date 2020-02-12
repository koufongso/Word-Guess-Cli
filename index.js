var Word = require("./Word.js");
var inquirer = require('inquirer');
var currentWord = undefined;
// construct the wordList which contain the Word object that is corresponding to the word
var wordDataBase = ["apple", "horse", "cat", "mouse"];

/**
 * Randomly return a word object from the wordDataBase
 */
function randomPick(){
    var word = wordDataBase[Math.floor(Math.random()*wordDataBase.length)];
    console.log(word);
    return new Word(word);
}

function ask(){
    currentWord = randomPick();
    getInput();
}



function getInput(){
    inquirer
    .prompt([
        {
            name:"input",
            message:"Guess a letter."
        }
    ])
    .then(answers => {
        console.log(answers.input)
        currentWord.guess(answers.input);
        console.log(currentWord.getWord());
        console.log("------------------------------");
        if(!currentWord.isClear()){
            getInput();
        }else{
            console.log("You got it right. Next One");
        }
    });
}


ask();