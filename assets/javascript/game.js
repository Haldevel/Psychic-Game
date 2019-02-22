//document.write("Guess what letter I'm thinking of");
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = [];


var possible = "abcdefghijklmnopqrstuvwxyz";
//have a random letter 
var randomLetter = generateLetter();
console.log(" random " + randomLetter);

document.addEventListener('keyup', function(event) {

    /* var x = event.keyCode;         // Get the Unicode value
    var y = String.fromCharCode(x).toLowerCase();    */

    var y = event.key;
  
    //console.log("U typed " + y);

    if(possible.charAt(y) === '-1') {
        console.log("Please pick a letter");
    }
    else {

        if(randomLetter === y) {
            console.log("You guessed right!");
            wins++;
            guessesLeft--;
            yourGuesses.push(y);
            console.log(yourGuesses); 
            console.log(wins);
            console.log(guessesLeft);
            resetGame();
            var lettersText = document.getElementById("letters");
            if(lettersText.textContent.length === 0) {
                lettersText.textContent = y;
            }
            else {
                lettersText.textContent = lettersText.textContent + " , " + y;            
            }
     
    
        }
        else  {
            console.log("You did not guess right!"); 
            //losses++;
            guessesLeft--;
            yourGuesses.push(y);
            console.log(yourGuesses); 
            console.log(losses);
            //console.log(guessesLeft);
            //console.log("new random " + randomLetter);
            if(guessesLeft === 0) {
                // losses++;
                // randomLetter = generateLetter();
                // console.log("new random " + randomLetter);
                resetGame() ;
                losses++;
               
            }
        }

        var winsText = document.getElementById("wins");
        winsText.textContent = wins;

        var lossesText = document.getElementById("losses");
        lossesText.textContent = losses;

        var guessesLeftText = document.getElementById("guessesLeft");
        guessesLeftText.textContent = guessesLeft;

        var yourGuessesText = document.getElementById("yourGuesses");
        yourGuessesText.textContent =  yourGuesses;
        
    }
    
  });

//read the letter typed on keyboard
/* if(toKeyPressed) {
    console.log("You pressed " + toKeyPressed());
    dhdhhdhd

} */

//if it is the same letter, add 1 to number of wins, subtruct 1 from guessesLeft and and the letter to the array yourGuesses 

//if it 

//document.querySelector("#wins")

function generateLetter() {
    var char = "";
  
  
    char = possible.charAt(Math.floor(Math.random() * possible.length));
  
    return char;
  }

  function resetGame() {
    randomLetter = generateLetter();
    console.log("new random " + randomLetter);
    guessesLeft = 9;
    yourGuesses = [];
  }

  /* function toKeyPressed(event) {

    var x = event.keyCode;         // Get the Unicode value
    var y = String.fromCharCode(x);    // Convert the value into a character
    document.getElementById("demo").innerHTML = "Number: " + x + " = Character: " + y; 
    return y;

} */
  
