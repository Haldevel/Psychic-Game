//document.write("Guess what letter I'm thinking of");
var wins = 0;
var losses = 0;
var guessesLeft = 10;
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
            randomLetter = generateLetter();
            console.log("new random " + randomLetter);
            
    
        }
        else  {
            console.log("You did not guess right!"); 
            losses++;
            guessesLeft--;
            yourGuesses.push(y);
            console.log(yourGuesses); 
            console.log(losses);
            console.log(guessesLeft);
            console.log("new random " + randomLetter);
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

  /* function toKeyPressed(event) {

    var x = event.keyCode;         // Get the Unicode value
    var y = String.fromCharCode(x);    // Convert the value into a character
    document.getElementById("demo").innerHTML = "Number: " + x + " = Character: " + y; 
    return y;

} */
  
