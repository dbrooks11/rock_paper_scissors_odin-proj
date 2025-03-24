
let humanScore= 0;
let computerScore=0;
let choice = " ";

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const bothChose = document.querySelector("#who-chose");
const pointTo = document.querySelector("#point-to-who");

const score = document.querySelector("#score");
score.textContent = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;

const winner = document.querySelector("#winner");

rockButton.addEventListener("click", () => {
    choice = "Rock";
    console.log(choice);
    playGame();
});

paperButton.addEventListener("click", ()=>{
    choice = "Paper";
    console.log(choice);
    playGame();
});

scissorsButton.addEventListener("click", ()=>{
    choice = "Scissors";
    console.log(choice);
    playGame();
});




//console.log(playGame());


function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

if(humanChoice == computerChoice){
 bothChose.textContent = "Tie";
 pointTo.textContent = "No One received points :(";
 humanScore += 0;
computerScore += 0;
} 
else if((humanChoice == "ROCK" && computerChoice == "SCISSORS") || 
        (humanChoice == "SCISSORS" && computerChoice == "PAPER") || 
        (humanChoice == "PAPER" && computerChoice == "ROCK")){
            bothChose.textContent = `${humanChoice} beats ${computerChoice}!`;
            pointTo.textContent = "Human +1 Point!";
            humanScore += 1;
    }
else{
    computerScore += 1;
    bothChose.textContent = `${computerChoice} beats ${humanChoice}!`;
    pointTo.textContent = "Computer +1 Point!";
}
}


const compChoice = document.querySelector("#computer");

function playGame(){
    
    let cpanswer = getComputerChoice();
    compChoice.textContent = `The Computer Chose: ${cpanswer}`; 
    playRound(choice, cpanswer);
    

    score.textContent = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;

    
    if(humanScore == 5){
        winner.textContent = "The Winner is: Human!";
        resetScore();
    }
    else if(computerScore == 5){
        winner.textContent = "The Winner is: Computer!";
        resetScore();
    }
}


function resetScore(){

    humanScore = 0;
    computerScore= 0;
    score.textContent = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;
}

function getComputerChoice(){
    //returns number starting a 1 through 3.
    //the +1 offsets math.random to start at 1. * 3 creates the range
    let x = Math.floor(Math.random() * 3) + 1;
    if(x == 1)
        return("Rock");
    else if(x==2)
        return("Paper");
    else
       return("Scissors");
}


