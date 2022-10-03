let randomNr = 0;
let countGuesses = 0;
let invalidGuess = "";
let anounceWin = "";
let anounceRestart = "";
document.getElementById("defaultOutput").innerHTML = defaultOutput = "Make a guess!";
document.getElementById("defaultCountOutput").innerHTML = defaultOutput = "Can you guess it?";


// Randomizer funktion som slumpar ett tal mellan 1-100
function randomizer(){
    randomNr = Math.floor(Math.random() * 101 + 1);
        console.log('Nummret är: ' + randomNr);
}

// User input + randomizer() + felhantering
function getInputValue(){
    
    randomizer();

    let inputVal = document.getElementById("guess").value;

    // If input is valid
    if(inputVal.typeof === Number && inputVal >= 0 || inputVal <= 100 && inputVal !== "" && inputVal){
        document.getElementById("defaultCountOutput").innerHTML = defaultOutput = "";
        document.getElementById("restart").innerHTML = anounceRestart = "";
        // document.getElementById("restart").innerHTML = anounceRestart = "";
        document.getElementById("invalid").innerHTML = invalidGuess = "";
        document.getElementById("win").innerHTML = anounceWin = "";
        document.getElementById("defaultCountOutput").innerHTML = defaultOutput = "";

        console.log('Du gissade: ' + inputVal);
        document.getElementById("yourGuess").innerHTML = "Your guess was: " + inputVal;
        let anounceGuesses = "Number of guesses: "
        countGuesses += 1;
        document.getElementById("guessAmount").innerHTML = anounceGuesses + countGuesses;
        
        
        // If guess is correct
        if(randomNr == inputVal){
            console.log("Gissningen var rätt!");
            document.getElementById("invalid").innerHTML = invalidGuess = "";
            document.getElementById("yourGuess").innerHTML = "Your guess was: " + inputVal;
            document.getElementById("defaultCountOutput").innerHTML = defaultOutput = "";
            document.getElementById("win").innerHTML = anounceWin = " After: " + countGuesses + " guesses!";
            
            restartGame();
        }
        // If guess is to high
        else if(randomNr < inputVal){
            console.log("Gissningen var för hög!");
        } 
        // If guess is to low
        else if(randomNr > inputVal){
            console.log("Gissningen var för låg!")
        }
        } else { 
        document.getElementById("win").innerHTML = anounceWin = "";
        document.getElementById("yourGuess").innerHTML = inputVal = "";
        invalidGuess = "Gissa på ett nummer mellan 1-100";
        document.getElementById("restart").innerHTML = anounceRestart = "";
        document.getElementById("defaultOutput").innerHTML = defaultOutput = "";
        document.getElementById("invalid").innerHTML = invalidGuess;
        } 
    }


function restartGame(){
    countGuesses = 0;
    inputVal = 0;
    randomNr = 0;
    anounceWin = "";
    anounceRestart 
    console.clear();
    
    document.getElementById("guessAmount").innerHTML = "";
    document.getElementById("defaultOutput").innerHTML = defaultOutput = "";
    document.getElementById("guess").value = inputVal = "";
    document.getElementById("yourGuess").innerHTML = inputVal;
    document.getElementById("defaultCountOutput").innerHTML = defaultOutput = "Can you guess it?";
    document.getElementById("invalid").innerHTML = invalidGuess = "";
    document.getElementById("restart").innerHTML = anounceRestart= "New game! Make a new guess!";

    randomizer();
}











// FÖRSTA VERSIONEN

// function getInputValue(){
//     let randomNr = Math.floor(Math.random() * 101 + 1);
//     console.log('Nummret är: ' + randomNr);

//     let inputVal = document.getElementById("guess").value;
//     if(inputVal.typeof === Number && inputVal >= 0 || inputVal <= 100 && inputVal !== "" && inputVal){
//         console.log('Du gissade: ' + inputVal);
//         document.getElementById("yourGuess").innerHTML = inputVal;
    
//         if(randomNr == inputVal){
//             console.log("Gissningen var rätt!");
//         }
//         else if(randomNr < inputVal){
//             console.log("Gissningen var för hög!");
//         } else{
//             console.log("Gissningen var för låg!")
//         }
//     } else { 
//         document.getElementById("yourGuess").innerHTML = inputVal = "Gissa på ett nummer mellan 1-100, Försök igen!";
//     }
// }

// let guesses = document.querySelector(".button-guess");
// let countGuesses = 0;

// guesses.addEventListener("click", function() {
//     countGuesses += 1;
//     document.getElementById("guessAmount").innerHTML = countGuesses;
// })