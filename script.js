// This function is used to set the three user conditions.

function getUserChoice () { 
  playerSelection = prompt("Please type rock, paper or scissors").toLowerCase();

  while (playerSelection !== "paper" && playerSelection !== "rock" && playerSelection !== "scissors") {
    playerSelection = prompt("That input was incorrect. Please try again.").toLowerCase();
  }
  return playerSelection;
};

// This function is used to randomly generate the computers choice.

function computerPlay () {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  }
};

// This function determines the winner by comparing the player and computers choice.

function playRound(playerSelection, computerSelection) { 
  
  if (playerSelection == computerSelection) {
    return 'This round is a draw';
  }

  if (playerSelection == "rock" && computerSelection == "paper") {
    return 'Paper beats Rock, The computer won!';
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return 'Paper beats Rock, You won!';
  }

   if (playerSelection == "paper" && computerSelection == "scissors") {
    return 'Scissors beats paper, The computer won!';
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return 'Scissors beats paper, You won!';
  }

   if (playerSelection == "scissors" && computerSelection == "rock") {
    return 'Rock beats Scissors, The computer won!';
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return 'Rock beats Scissors, You won!';
  }
};

/*This function is used to play each round of Rock, Paper, and Scissors.
and reiterates (loops) through the function 5 times. 

It also adds a point to
the player or computer each round depending on the condition.*/

function game() {
    let userScore = 0;
    let computerScore = 0;
    let rounds = 0;

  for(i = 0; i <= 4; i ++) {
    rounds = i + 1;
    const playerInput = getUserChoice();
    const computerSelection = computerPlay();

    if (playerInput == "rock" && computerSelection == "paper") {
      computerScore++;
    } else if (playerInput == "paper" && computerSelection == "rock") {
      userScore++;
    } 

    if (playerInput == "paper" && computerSelection == "scissors") {
      computerScore++;
    } else if (playerInput == "scissors" && computerSelection == "paper") {
      userScore++;
    } 
    
    if (playerInput == "scissors" && computerSelection == "rock") {
      computerScore++;
    } else if (playerInput == "rock" && computerSelection == "scissors") {
      userScore++;
    }

    console.log("Round: " + rounds);
    console.log("User Choice: " + playerInput);
    console.log("The Computer Choice: " + computerSelection);
    console.log(playRound(playerInput, computerSelection));
    console.log("Player Score: " + userScore);
    console.log("Computer Score: " + computerScore);
    console.log("\n");
  }

  if (userScore > computerScore) {
    console.log("The Player Wins!");
  } else if (computerScore > userScore) {
    console.log("The Computer Wins!");
  } else if (userScore === computerScore) {
    console.log("This is a Draw!");
  }
};

game();