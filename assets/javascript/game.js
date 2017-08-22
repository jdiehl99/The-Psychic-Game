// Creates an array that lists out all of the letters
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedSoFar = [];

// choose random letter from array and log it in console
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log('ComputerGuess', computerGuess);

// This function is run whenever the user presses a key
document.onkeyup = function (event) {
    // Determines which key was pressed and logs it
    var userGuess = event.key.toLowerCase();;
    console.log('UserGuess', userGuess);

    // test a letter was selected, not another keyboard input
    if (computerChoices.indexOf(userGuess) < 0) {
        alert("You must select a letter");
        return false;
    }
    guessesLeft--; // reduce remaining guesses by 1

    // determine if there are still guesses available
    if (guessesLeft > 0) {
        if (userGuess == computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            alert("You must be psychic!");
        } else {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses + "";
            alert("Bummer... your psychic mojo is lacking");
        }

    } else { // no more guesses, game over
        alert("game over");
    }
}