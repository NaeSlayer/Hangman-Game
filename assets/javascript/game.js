//variables

var words = ["charlie", "chocolate", "wonka", "oompaloompa", "elevator", "goose", "waterfall", "bucket", "snozzberries", "blueberry", "gobstopper"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var alreadyGuessed = [];
var incorrectLetters = [];
var winningLetters = [];
var currentWord = "";
var validLetters = [];
var answerArray = [];
var wordSplit = [];

//Functions
function updateWins() {
    document.getElementById("wins").innerHTML = wins;
}
function updateLosses() {
    document.getElementById("losses").innerHTML = losses;
}
function updateGuessesLeft() {
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

    if (guessesLeft < 1) {
        losses++;
        resetGlobalVariables();
}
}

//function to store words in winning letter array
//var uniqurArr = arr.filter(function(item, pos, self) {
  //  return(self.indexOf(item)===-1)
//});


updateWins();
//updateLosses();
updateGuessesLeft();



//Main Process
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    userGuess.textContent = event.key;
    console.log(userGuess);
    console.log(letters.indexOf(userGuess));
  
    
    function updateValidLetters() {
        console.log(letters.indexOf(userGuess));
        if (letters.indexOf(userGuess) != -1 && validLetters.indexOf(userGuess) ===-1) {
            // validLetters.push(userGuess);
            document.getElementById("validLetters").innerHTML = validLetters.push(userGuess);
            document.getElementById("validLetters").innerHTML = validLetters;
            
        }

    }

    function updateAlreadyGuessed() {
        if (letters.indexOf(userGuess) != -1) {
            document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed.push(userGuess);
            document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;
        }
    }
    updateValidLetters(); 
    updateAlreadyGuessed();
}

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var currentWord = words[Math.floor(Math.random() * words.length)];
    console.log("current word: " + currentWord);


    wordSplit = currentWord.split("");
    console.log("word split " + wordSplit);
    // document.getElementById("currentWord").innerHTML = currentWord.push(validLetter[1]);
    // document.getElementById("currentWord").innerHTML = currentWord;

    for (var i = 0; i < words.length; i++) {
        currentWord[i] = "_";
        
    }

        //return words.split('');
        //document.getElementById("currentWord").innerHTML = currentWord.push(words);
        //document.getElementById("currentWord").innerHTML = currentWord;

       
            
    //}
    function splitString(words, comma) {
        var arrayOfStrings = words[i].split(comma);

        console.log('The original string is: "' + words + '"');
        console.log('The separator is: "' + comma + '"');
        console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));

       
    }
//splitString();




