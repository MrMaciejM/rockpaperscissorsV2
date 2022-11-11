// choices and winning conditionals
var choices = ["r", "p", "s"];
//var winningConditions = ["rs", "pr", "sp"];

// score keeping
var wins = 0;
var draws = 0;
var losses = 0;
var roundCounter = 0;

for (roundCounter; roundCounter < 10; roundCounter++) {
  var userInput = "";
  userInput = prompt('Choose "r", "p" or "s"');
  //prompt('Choose "r", "p" or "s"');

  if (userInput === "r" || userInput === "p" || userInput === "s") {
    // start of the game

    // CPU and random logic
    var randomGenerator = Math.floor(Math.random() * choices.length);
    var CPUchoice = choices[randomGenerator];
    var choiceOutcome = (userInput += CPUchoice);

    // when user wins!
    if (
      choiceOutcome === "rs" ||
      choiceOutcome === "pr" ||
      choiceOutcome === "sp"
    ) {
      console.log(`You have won with ${choiceOutcome}!`);
      wins++;
    }
    // draw mechanic
    else if (
      choiceOutcome === "rr" ||
      choiceOutcome === "pp" ||
      choiceOutcome === "ss"
    ) {
      console.log("It is a draw with " + choiceOutcome);
      draws++;
    }
    // loss mechanic
    else {
      console.log(
        "You lost..." + userInput + " " + " CPU choice: " + CPUchoice
      );
      losses++;
    }
  } else {
    alert("please type in the correct letter in lowercase format :)");
  }
}
console.log(`Final results: Wins: ${wins} Losses: ${losses} Draws: ${draws}`);
alert(`Final results: Wins: ${wins} Losses: ${losses} Draws: ${draws}`);

/* 
??????????????????????????????????????????????????????
var userInput = "a";
if (userInput === "r" || "s") {
  console.log("correct input");
} else {
  console.log("incorrect input");
}
*/

/*
???????????????????????????????????

if (userInput === "r" || "p" || "s") {
  console.log("correct input - line 21");

  for (roundCounter; roundCounter < 10; roundCounter++) {
    console.log("inside for loop");
  }
}

*/
