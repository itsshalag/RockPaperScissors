const choices=["rock", "paper", "scissors"];


//computer Random choice
let getComputerChoice=()=>{
   
    let options = choices[Math.floor(Math.random()*choices.length)];
    return options;
    
}

//A round of R.P.S. that compares the both choices 
//if player and compu play same weapon then its a tie and return tie and end it ther
//or if player plays paper and compu plays rock
//or if player plays scissors and compu plays paper player wins
//or if player plays rock and compu plays scissor player wins
//or if they play the same thing its a tie
let playRound=(playerSelection, computerSelection)=>{

    if(playerSelection == computerSelection){
        return "its a tie";
    } else if (playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection ==  "scissors" && computerSelection == "paper" ||
        playerSelection == "rock" && computerSelection == "scissors")
        {
            return "user beat compu"; 
    } else {
            return "computer beat player";
    }
    
} 
const playerSelection = "rock";
const computerSelection =getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

let game=()=>{
    
}
