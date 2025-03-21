
let humanScore= 0;
let computerScore=0;


console.log(playGame());


function playRound(humanChoice,
computerChoice){
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    

if(humanChoice == computerChoice){
 return('Tie!');
}
else if((humanChoice == "ROCK" && computerChoice == "SCISSORS") || 
        (humanChoice == "SCISSORS" && computerChoice == "PAPER") || 
        (humanChoice == "PAPER" && computerChoice == "ROCK")){
            humanScore += 1;
    return(`You Won! ${humanChoice} beats ${computerChoice}`);
    }
else{
    computerScore += 1;
    return(`You Lost! ${humanChoice} does not beat ${computerChoice}`);
}
}

function playGame(){
    const rounds = 5;

   for(let i = 1; i <= rounds; i++){
    let answer = prompt("Lets Play RPS!\n Enter Rock, Paper, or Scissors!");
    let cpanswer = getComputerChoice();

    if(answer == null){
        return;
    }

    console.log(`Round ${i}!`);
    console.log(`You Chose: ${answer}`);
    console.log(`Computer Chose: ${cpanswer}`);
    console.log(playRound(answer,cpanswer));
    console.log(`Score: Human ${humanScore} Computer ${computerScore}`);
   }

   if(humanScore > computerScore)
   console.log("Game Finished. You Won Human!");
   else if(computerScore > humanScore)
    console.log("Game Finished. The Computer Won!");
   else{
    console.log("Game ended in Tie!");
   }

   return;
   
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


