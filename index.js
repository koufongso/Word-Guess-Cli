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
    // console.log(word);
    return new Word(word);
}

function ask(){
    currentWord = randomPick();
    console.log("\x1b[0m",currentWord.getWord()+"\n");
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
        // console.log(answers.input)
        currentWord.guess(answers.input);
        console.log(currentWord.getWord());
        console.log("\x1b[0m","------------------------------");
        if(currentWord.isFail()){
            console.log("\x1b[31m","------------------------------");
            console.log("You ran out of guesses. Next One >>>");
            console.log("------------------------------");
            ask();
        }else{
            if(!currentWord.isClear()){
                getInput();
            }else{
                console.log("\x1b[32m","******************************");
                console.log("You got it right. Next One >>>");
                console.log("******************************");
                ask();
            }
        }

    });
}


ask();