// choices and winning conditionals
var choices = ["r", "p", "s"];
var winningConditions = ["rs", "pr", "sp"];

// score keeping
var wins = 0;
var draws = 0;
var losses = 0;
var roundCounter = 0;

for (roundCounter; roundCounter < 10; roundCounter++) {
  var userInput = prompt('Choose "r", "p" or "s"');

  // CPU input and logic
  var randomNumber = Math.floor(Math.random() * choices.length);
  var CPUchoice = choices[randomNumber];

  // checks if the user has entered the correct value
  if (choices.includes(userInput)) {
    //start of the game
    if (userInput === CPUchoice) {
      console.log("It is a draw!");
      draws++;
    } else if (winningConditions.includes((userInput += CPUchoice))) {
      console.log("You have won!");
      wins++;
    } else {
      console.log("You have lost! The CPU chose " + CPUchoice);
      losses++;
    }
  }
}
alert(`Final results: Wins: ${wins} Losses: ${losses} Draws: ${draws}`);
