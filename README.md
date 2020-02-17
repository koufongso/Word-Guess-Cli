# Word-Guess-Cli

### Description
* This a node version of word-guess game
* When the program started, it will randomly pick a word from a pre-defined word array and show it in the terminal.
* The unknown letter will be represented by `_`.
* Then it wil ask users to type a letter
    * All characters (not only letter) are valid input.
    * It is not allowed to entered more than 2 characters each time.
* It will check the input letter to the word, one of the following will happend:
    1. The word contains the input letter -> Correct, reveal this letter in the word.
    2. The word does not contain the input letter -> Incorrect, lose 1 attempt.
    3. Repated input (you have enter this letter before), enter a letter again.

* If the user hit all the letters in the word, started next game.
* If the user ran out of attempt before hitting all the letters in the word, started next game.

### Demo

* All possible cases:  
    ![demo_all_cases](/Demo/demo_all_cases.png)

* Correctly guess the word:  
    ![demo_correct](/Demo/demo_correct.png)

* Fail to guess the word:  
    ![demo_incorrect](/Demo/demo_incorrect.png)

