const options =["rock", "paper", "scissors"];

let getComputerChoice = () =>{
    const choice= options[Math.floor(Math.random() *options.length)];
    return choice; 
}
getComputerChoice();

let checkWinner=(playerSelection, computerSelection)=>{
    if( playerSelection==computerSelection){
    return "Tie"
    }

    else if(
        (playerSelection=="rock" && computerSelection== "scissor") ||
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    }
    else {
        return "computer";
    }

}


let gameFunc=(playerSelection, computerSelection)=>{
    const result= checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "its a tie!"
    }
    else if(result =="player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}