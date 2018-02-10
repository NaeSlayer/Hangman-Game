


var words = {
    w1 : ["B", "O", "O", "K"],
    w2 : ["D", "E", "S", "K"],
    w3 : ["P", "E", "N", "C", "I", "L"],
    w4 : ["E", "R", "A", "S", "E", "R"],
};

var score = 0;

var wordIndex = 0;

var wordsArray = 0;

function renderWord() {
    // If there are still more wordss, render the next one.
    if (wordIndex <= (wordsArray.length - 1)) {
        document.querySelector("#question").innerHTML = wordsArray[wordIndex][0];
    }
    // If there aren't, render the end game screen.
    else {
        document.querySelector("#word").innerHTML = "Game Over!";
        document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + wordsArray.length;
    }
}

// Function that updates the score...
function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
}
renderWord();
updateScore();

// When the user presses a key, it will run the following function...
document.onkeyup = function (event) {

    // If there are no more questions, stop the function.
    if (wordIndex === wordsArray.length) {
        return;
    }

    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = String.fromCharCode(event.which).toUpperCase();

    // Only run this code if "t" or "f" were pressed.
    if (userInput === "t" || userInput === "f") {

        // If they guess the correct answer, increase and update score, alert them they got it right.
        if (userInput === questionsArray[questionIndex][1]) {
            alert("Correct!");
            score++;
            updateScore();
        }
        // If wrong, alert them they are wrong.
        else {
            alert("Wrong!");
        }

        // Increment the questionIndex variable and call the renderQuestion function.
        wordIndex++;
        renderWord();

    }

};
