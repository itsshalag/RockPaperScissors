const choices = ["rock", "paper", "scissors"];


let getComputerChoice =() =>{
    computerSelection = choices[ Math.floor((Math.random() *choices.length))];
    return computerSelection; 
}

const lowerCaseChoice = () => {
    playerChoice=prompt("Enter: rock, paper or scissors");
    if (playerChoice === null || playerChoice=== ' ' ){
        alert("You did not enter a choice");
        lowerCaseChoice(); 
    } else {
        playerChoice= playerChoice.toLowerCase();
        return playerChoice;  
        
      }
}

const getPlayerChoice = () => {
    playerSelection= lowerCaseChoice();
    choiceIncludes= choices.includes(playerSelection);
        if(choiceIncludes === false){ 
            getPlayerChoice(); 
        }
         else return playerSelection;
}

let playRound = (playerSelection,computerSelection) => {
    
    if (playerSelection == computerSelection){
        console.log("ahh! chose same ting!");
        return;           
    } else if ( playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"){ 
        console.log  (`You win! ${playerSelection} beats ${computerSelection}`);
        return playerSelection;    
    } else { 
        console.log(`You lose! ${playerSelection} loses to ${computerSelection}`); 
        return computerSelection;}
}

const game =() => {
    playerScore = 0;
    computerScore = 0;
    for(let i =0; i<5; i++){
        playerS=getPlayerChoice();
        computerS=getComputerChoice(); 
        compare =playRound(playerS, computerS) ;
    
        if (compare == playerSelection)
        playerScore++;
        else if(compare== computerSelection)
        computerScore++; 
    }
    if(playerScore>computerScore)
        return `Player Wins!`;
    else if (playerScore<computerScore)
        return `Computer Wins!`;
    else return "Its a tie lol";
}
    
