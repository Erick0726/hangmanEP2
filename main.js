// GLOBAL VARIABLES (accessible by all functions)
// -----------------------------------------------------------------------------------

// Array of Word Options (all lowercase)
var wordslist = ["Pokemon", "Persona", "Portal"]

//Solution will be held here
var chosenWord = "";

// This will break the solution into individual letters to be stored in an array
var letterInChosenWord = [];

// This will be the number of blanks we show based on the solution
var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: a_ple)
var blanksAndSuccesses = [];

// Holds all of the wrong guesses
var wrongGuesses  = [];


// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9; 


// FUNCTIONS 
// --------------------------------------------------------------------------------------------

// Note: The startGame() function is not being run here. It's just being
//          made for future use.
function gameStart(){

    // Resets the guesses back to specified amount
    numGuesses = 9;

    // Solution is chosen randomly from wordList
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]

    // The word is broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    // We count the number of letters in the word
    numBlanks = letterInChosenWord.length;

    // We print the solution in console (for testing)
    console.log(chosenWord);

    // CRITICAL LINE - Here we reset the guess and success array at each round
    blanksAndSuccesses = [];
    // CRITICAL LINE - Here we reset the wrong guesses from the previous round
    wrongGuesses = [];

    // Fill up the blanksAndSuccesses list with appropriate number of blanks, which
    // is based on the number of letters in the solution
    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    // Print the initial blanks in the console
    console.log(blanksAndSuccesses);

    // Reprint the guessesLeft to 9
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // Prints the blanks at the beginning of each round in the HTML
    document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");

}