const choices = ["rock", "paper", "scissors"];

let getComputerChoice =() =>{
    computerSelection = choices[ Math.floor((Math.random() *choices.length))]; 
    console.log( "here is computer's choice: " + computerSelection);
    return computerSelection; 
}


const getPlayerChoice = () => {
    playerSelection= lowerCaseChoice();
    choiceIncludes= choices.includes(playerSelection);
        while(choiceIncludes === true){
            console.log("here is player Choice: " + playerSelection);
            return playerSelection;
        }
         if(choiceIncludes === false)
            getPlayerChoice();        
       
}

const lowerCaseChoice = () => {
    playerChoice=prompt("Enter: rock, paper or scissors");
    if (playerChoice === null || playerChoice === ''){
        alert("You did not enter a choice");
        lowerCaseChoice(); 
    } else {
        playerChoice= playerChoice.toLowerCase();
        return playerChoice;  
      }
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection=getPlayerChoice();
    computerSelection=getComputerChoice();

    if (playerSelection === computerSelection){
        console.log("it's a tie");
    } else if ( playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "scissor" && computerSelection === paper ||
                playerSelection === "paper" && computerSelection === "scissors"){
                    console.log("player beat computer");
    } else console.log("computer wins");
}
playRound(); 

const chooseWinner =() => {

}