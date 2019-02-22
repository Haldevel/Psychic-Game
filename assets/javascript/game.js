//declare main variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = [];


var possible = "abcdefghijklmnopqrstuvwxyz";
//generate a random letter 
var randomLetter = generateLetter();
console.log("Random " + randomLetter);

//event handler onkeyup
document.addEventListener('keyup', function(event) {

    var y = event.key;
     
   /*  if(possible.indexOf(y) == '-1') { */
    if(!y.match(/[a-z]/i)){
        console.log("Please pick a letter");
    }
    else {

        //if guess is right
        if(randomLetter === y) {
            console.log("You guessed right!");
            wins++;
            guessesLeft--;
            yourGuesses.push(y);
            resetGame();
            //display of winning letters
            var lettersText = document.getElementById("letters");
            if(lettersText.textContent.length === 0) {
                lettersText.textContent = y;
            }
            else {
                lettersText.textContent = lettersText.textContent + " , " + y;            
            }    
        } //the guess is not right
        else  {
            console.log("You did not guess right!"); 
            guessesLeft--;
            yourGuesses.push(y);
            if(guessesLeft === 0) {
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

//function to generate a random letter
function generateLetter() {
    var char = "";    
    char = possible.charAt(Math.floor(Math.random() * possible.length));
  
    return char;
  }

//function to reset the game 
function resetGame() {
    randomLetter = generateLetter();
    console.log("New random " + randomLetter);
    guessesLeft = 9;
    yourGuesses = [];
  }

  
