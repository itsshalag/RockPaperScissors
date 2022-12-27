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
    
    if (playerSelection === computerSelection){ console.log("ahh! chose same ting!");
        return;
    } else if ( playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"){ console.log  (`You win! ${playerSelection} beats ${computerSelection}`);
            return playerSelection++; 
       
 } else { console.log(`You lose! ${computerSelection} beats ${playerSelection}`);return computerSelection++;}
    
}

const game =() => {
    for(let i =0; i<5; i++){
        playerS=getPlayerChoice();
        computerS=getComputerChoice(); 
        playRound(playerS, computerS);
    }
        if(playerSelection>computerSelection){
            return `Player Wins!`;}
        else if (playerSelection<computerSelection){
            return `Computer Wins!`;}
        else return "Its a tie lol";
}
console.log(game());