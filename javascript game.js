// Declaring that the var is randomNumber and we assign a random number using built-in functions.
var randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;

// Decalring a function of getRandomInt
function getRandomInt(){
  // When you run the function it assisngs randomNumber a new random number.
  randomNumber =  Math.floor(Math.random() * (101 - 1)) + 1;
}


// Declaring the game functiong hiLo
function hiLo() {
  // Running the funcing that getRandomInt is in
  getRandomInt();
  // Alerting the user of the random number (we dont need this for us only)
  alert(randomNumber);
  var userName;
  userName = prompt("Enter your name, why don'tcha?")
  // Declaring a variable that will store the user's guess.
  var userGuess;
  var guessCount = 0;

  while ((userGuess != randomNumber) && (guessCount < 7)){
    // User eneters their answer
    userGuess = prompt("Enter your guess. You are on guess "+(guessCount+1) +" of 7");
    while (parseInt(userGuess) != userGuess){
      alert("Use numbers only (no empty answers)");
      userGuess = prompt("Enter your guess. You are on guess "+(guessCount+1) +" of 7");
    }
    guessCount++;
    // Checking to see if answer is greater than random number.
    if (userGuess > randomNumber) {
      //
      alert("Your guess is too high");
    }
    if (userGuess < randomNumber){
      //
      alert("Your guess is too low");
    }
  }
  //
  if (userGuess == randomNumber){
    alert("Congrats, "+userName+"! You Win!");
  } else {
    alert("Sorry, "+userName+"! You Lose!");
  }
}
