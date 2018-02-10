

// Creates arrays to store possible computerChoices and userChoices
var wordBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Creates variables to store wins, losses, guessesLeft, and letters alreadyGuessed
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var alreadyGuessed = [];
//var currentWord;


//functions that update the wins, losses, guessesLeft
function resetGlobalVariables() {
    //list of all the variables with original attributes here
    var guessesLeft = 9;
    var alreadyGuessed = [];

}
function updateWins() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    resetGlobalVariables();
    
}
function updateCurrentWord() {
    document.getElementById("currentWord").innerHTML = "Losses: " + currentWord;
    resetGlobalVariables();
    
}
function updateGuessesLeft() {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

    if (guessesLeft < 1) {
        //document.getElementById("guessesLeft").innerHTML = "Game Over!";
        losses++;
        resetGlobalVariables();
        }

           
}



// FUNCTIONS
// ==============================================================================



updateWins();
updateCurrentWord();
updateGuessesLeft();


//Creates a function that runs when the user presses a key
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    userGuess.textContent = event.key;
    

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (var i = 0; i < wordBank.length; i++) {

    if ((userGuess === userChoices[i]) && (currentWord === wordBank[i])) {
        console.log("You win!");
        wins++;
        resetGlobalVariables();
        
        
    } else if ((userGuess === userChoices[i]) && (currentWord != wordBank[i])) {
        console.log("wrong");
        guessesLeft--;
        console.log(guessesLeft);
        
    }
    
        
}

    function updateAlreadyGuessed() {
        document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed.push(userGuess);
        document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;
    }
    updateAlreadyGuessed();
    updateGuessesLeft();
    updateWins();
   // updateLosses();
}

