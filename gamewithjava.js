let pScore = 0;
let cScore = 0;


function computerPlay() { //randomly returns 'Rock', 'Paper', or 'Scissors'

    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Scissors";
            break;
        case 2:
            return "Paper";
            break;
    }
}

function displayScore() {
    let playerScore = document.querySelector("#player_score");
        playerScore.textContent = pScore;
    let computerScore = document.querySelector("#computer_score");
        computerScore.textContent = cScore;
}

function endGame(){
  const buttons = document.querySelectorAll(".choice");
      buttons.forEach(button => button.removeEventListener("click", game));
}

function winner() {
    let finalResult = document.querySelector("#final_result");
    if (pScore===5) {
      finalResult.textContent = "You win!"
      endGame();
    } else if(cScore===5) {
        finalResult.textContent= "You lose!"
        endGame();
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Scissors" && computerSelection === "Rock") ||
        (playerSelection === "Paper" && computerSelection === "Scissors")){
          cScore++;
          return "You lose this round!";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")){
          pScore++;
          return "You win this round!";
    }
    else if (playerSelection === computerSelection){
          return "Draw! You both chose " + computerSelection + ".";
    }
    else {
        return NaN;
    }
}

function game(e) {

    let playerSelection = e.target.id;
    let computerSelection = computerPlay();

    var computerChoice = document.querySelector("#computer_choice");
        computerChoice.textContent = computerSelection;
    var playerChoice = document.querySelector("#player_choice");
        playerChoice.textContent = playerSelection;

    let result = playRound(playerSelection, computerSelection);
    let roundResult = document.querySelector("#result_display");
        roundResult.textContent = result;

    //RESET
    document.getElementById("reset").onclick = function() {
        location.reload();
    }

    displayScore();
    winner();
}


const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => button.addEventListener("click", game));
displayScore();
