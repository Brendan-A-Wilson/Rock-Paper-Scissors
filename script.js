// This function is used to set the three user conditions.

function getUserChoice(userInput) { 
  //var userInput = prompt("Please type rock, paper or scissors");
  //userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('That was the wrong input, please try again.');
  }
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
    
  for(i = 0; i <= 4; i ++) {
    const computerSelection = computerPlay();
    var userInput = prompt("Please type rock, paper or scissors");
    let playerSelection = getUserChoice(userInput);

    if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      userScore++;
    }

    if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      userScore++;
    }
    
    if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      userScore++;
    }
    
    console.log("User Choice: " + playerSelection);
    console.log("The Computer Choice: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
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