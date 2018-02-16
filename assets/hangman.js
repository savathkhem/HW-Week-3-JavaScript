

// THIS FUNCTION RUNS WHENEVER THE START BUTTON IS CLICKED
    function myFunction(){
        console.log("Game Started");
    }

// CREATE AN ARRAY OF WORDS
    var words = ["robot", "peanut", "artichoke"];
    var word = words[Math.floor(Math.random() * words.length)];

// UNDERSCORE FOR ANSWERS
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;




    
// HANG MAN GAME CODE

// THIS FUNCTION RUNS WHENEVER THE USER PRESSES A KEY
document.onkeyup = function(event) {
    var guessText = document.getElementById("guess-text");
    guessText.textContent = event.key;           
        if (remainingLetters > 0) ;
// Show the player their progress
            console.log(answerArray.join(" "));
// Take input from the player
            var guess = event.key;

        if (guess.length !== 1) {
            console.log("Please enter a single letter.");
        } else {
        }
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            // Update answerArray and remainingLetters for every correct guess
            console.log(answerArray.join(" "));
            console.log("Good job! The answer was " + word);
            }
        }
    }