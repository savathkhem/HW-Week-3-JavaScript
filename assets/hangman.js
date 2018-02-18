

// THIS FUNCTION RUNS WHENEVER THE START BUTTON IS CLICKED
    function myFunction(){
        console.log("Game Started");
        alert("Do You Want To Play A Game???")



// CREATE AN ARRAY OF WORDS
    var words = ["robot", "peanut", "artichoke"];
    var word = words[Math.floor(Math.random() * words.length)];


// UNDERSCORE FOR ANSWERS
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;

// ARRAY FOR GUESSED LETTERS
    var guessArray = [];

// HOW MANY CHANCES PLAYER CAN HAVE
    var Chance = 10;

// VARIABLES
    var guess = "";
    var guessText = "";
    var answerText = "";
    var guessedText = "";
    var chanceText = "";

// HANG MAN GAME CODE

function varText(){
    var guessText = document.getElementById("guess-text");
    var answerText = document.getElementById("answer-text");
    var guessedText = document.getElementById("guessed-text");
    var chanceText = document.getElementById("chance-text");
    guessText.textContent = event.key;    
    answerText.textContent = answerArray;
    guessedText.textContent = guessArray;
    chanceText.textContent = Chance;
    //PUSH GUESS TO GUESSARRAY
    guessArray.push(event.key)
}




// THIS FUNCTION RUNS WHENEVER THE USER PRESSES A KEY
document.onkeyup = function(event) {

    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var guessText = String.fromCharCode(event.which).toLowerCase();
    // TEXT THAT GETS USED IN HTML
    var guess = event.key;

    // PLAYER INPUT
    if (guess.length !== 1) {
        console.log("Please enter a single letter.");
    } 
    
    console.log(answerArray.join(" "));
    if (remainingLetters > 1) ;
    else {
        alert("Good job! The answer was " + word);
    }
    // UPDATE THE GAME WITH GUESS
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
        // UPDATE ANSWERARRAY AND REMAININGLETTERS FOR EVERY CORRRECT GUESS
        console.log(answerArray.join(" "));
        }
        
    } 
    if (word[j] != guess){
        (Chance--);
        if (Chance < 0)alert("You Lose, Refresh Page To Try Again");
    }
    varText();
}
    }

            // else (Chance--);{
            //     if (Chance < 0)alert("You Lose, Refresh Page To Try Again");
            // }
