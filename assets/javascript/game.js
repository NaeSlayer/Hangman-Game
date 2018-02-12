//the only function that I know of that isn't working how I would like is that the alreadyGuessed letters don't clear until a letter is selected for the new word. I am pretty sure it is a scope problem, but I didn't have time to figure it out. 

//variables

var words = ["charlie", "chocolate", "wonka", "oompaloompa", "elevator", "goose", "waterfall", "bucket", "snozzberries", "blueberry", "gobstopper"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var alreadyGuessed = [];
var currentWord = "";
var wordSplit = [];
var wordBlanks = [];


//Functions
//update the wins div on HTML
function updateWins() {
    document.getElementById("wins").innerHTML = wins;
}

//updates the losses div on HTML
function updateLosses() {
    document.getElementById("losses").innerHTML = losses;
}

//checks for win and sets up new word, adds 1 win, clears alreadyGuessed array and resets guesses remaining
function checkForWin(){
    if (wordBlanks.indexOf("_") === -1) {
        wins++;
        setupWord();
        alreadyGuessed = [];
        guessesLeft = 12;
        updateWins();
        updateGuessesLeft();
    }
}

//updates the guessesLeft div on HTML
//also sets up new word, adds 1 loss, clears alreadyGuessed array and resets guesses remaining
function updateGuessesLeft() {
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

    if (guessesLeft < 1) {
        guessesLeft = 12;
        alreadyGuessed = [];
        losses++;
        setupWord();
        updateGuessesLeft();
    }
}

//Main Process
document.onkeyup = function (event) {

    // Determines which key was pressed and stores as lowercase.
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    
    //checks to see if userGuess is correct
    if (wordSplit.indexOf(userGuess) >= 0) {
        // userGuess is correct.
        var letterIndices = getLetterIndices();

        //uses indices of userGuess in wordSplit to replace "_" in wordBlanks
        for (var i = 0; i < letterIndices.length; i++) {
            var letterIndex = letterIndices[i];
            wordBlanks[letterIndex] = userGuess;
            letterIndex;
        }
        printWord();
    
    }
        //finds indices of userGuess in wordSplit and returns them
        function getLetterIndices() {
            var letterIndices = [];
            for (var i = 0; i < wordSplit.length; i++) {
                if (wordSplit[i] === userGuess) {
                    letterIndices.push(i);
                }
            }

            return letterIndices;
            
        }
    
         // userGuess.textContent = event.key;
        console.log("userguess: " + userGuess);
        console.log("index of letter guessed " + letters.indexOf(userGuess));
  
 
        //checks to make sure userGuess is a letter from letters array and checks to make sure userGuess is not already included in alreadyGuessed array
        //if userGuess is a valid guess and not duplicate -> push guess to alreadyGuessed array, decrent guesses and update guessesLeft on HTML
        function updateAlreadyGuessed() {
            if (letters.indexOf(userGuess) != -1 && alreadyGuessed.indexOf(userGuess) === -1) {
            
                console.log("index of letter guessed " + letters.indexOf(userGuess));
                alreadyGuessed.push(userGuess);
                document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;
                guessesLeft--;
                updateGuessesLeft();
            }
        };
  
    updateAlreadyGuessed();
    updateWins();
    updateLosses();
    checkForWin();

    }  //end on onkeyup


//this selects new word, splits it, and stores word as underscores for each letter
//also clears old word and clears alreadyGuessed letters
function setupWord() {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var currentWord = words[Math.floor(Math.random() * words.length)];
    wordBlanks = [];
    alreadyGuessed = [];
    console.log("current word: " + currentWord);
    wordSplit = currentWord.split("");
    console.log("word split " + wordSplit);


    for (var i = 0; i < wordSplit.length; i++) {
        wordBlanks[i] = "_";
    }
        printWord();
}

//displays word on HTML 
function printWord(){
    document.getElementById("currentWord").innerHTML = wordBlanks.join(" ");
   

}
updateWins();
updateLosses();
updateGuessesLeft();
setupWord();


       
            
   
   



