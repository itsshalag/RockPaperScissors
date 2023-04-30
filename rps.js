pScore = 0; 
cScore = 0;
tie = 0; 

//UI. When play is clicked make R.P.S buttons appear
const startGame= () => {
    intro = document.querySelector('.intro');
    playBtn = document.querySelector(".playBtn");
    match = document.querySelector('.match');

    playBtn.addEventListener('click', e => {
    match.classList.add("fadeIn");
    playBtn.style.display= 'none';
    });
}


//When "rock", "paper", or "scissors" is clicked generate random
//option for computer selection then compare to see who wins
const playGame= () => {
    button = document.querySelectorAll('.buttons button');
    choices= ["rock", "paper", "scissors"];
    choiceDisplay = document.querySelector('.matchContainer');
    playerDisplay = document.querySelector('.playerDisplay');

    button.forEach(button => {
        button.addEventListener('click', function(e) {

            //generate random computerSelection
            computerSelection = choices[ Math.floor((Math.random() *choices.length))];
            
            //display computer and player selection on UI
            playerSelection = this.textContent;
            playerDisplay.textContent = " "+ ` Player: ${playerSelection}`;
            choiceDisplay.textContent = ` Computer: ${computerSelection } ` + " ";         
            
            compareSelection(playerSelection, computerSelection);
        });
    }); 
}    

const compareSelection = ( playerSelection, computerSelection) => {
    //compare player and computer choice
    if (playerSelection === computerSelection){
    tie++;
    game();
    return;
    } else if ( playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock" ){ 
    pScore++;
    game();
    return;  
    } else {
    cScore++;
    game();
    return; 
    }
    
}   
const game = () => {

    playerScore = document.querySelector('.playerScore');
    computerScore = document.querySelector('.computerScore');
    tieScore = document.querySelector('.tieScore');
    resetBtn = document.querySelector('.resetBtn');
    rpsBtns = document.querySelector('.buttons');
    displayHolder = document.querySelector('.displayHolder');
    theWinner = document.querySelector('.theWinner');
    winSection = document.querySelector('.winSection');
    resetContainer = document.querySelector('.resetContainer');
    intro =document.querySelector('.intro');

    playerScore.textContent = pScore; 
    computerScore.textContent = cScore;
    tieScore.textContent = tie; 

    count= pScore +cScore +tie; 

    
    if(count === 5){
        //disable R.P.S buttons and make 'reset' button clickable. Present winner add trophy img
        rpsBtns.style.display = 'none';
        displayHolder.style.display = 'none';
        
        
        if( pScore > cScore){
            //add .winSection to display winner
            winSection.classList.add('fadeIn');
           
            theWinner.textContent = ("player");
        }
        else if( cScore > pScore ){
            //add .winSection to display winner
            winSection.classList.add('fadeIn');
            
            theWinner.textContent = ("computer");
        }
        else {
            //add .winSection to display winner
           
            winSection.style.display = 'none';

            
        } 
        //Add reset Button
        resetBtn.classList.add('fadeIn');
        resetBtn.addEventListener('click', (e) => {
            intro.reset();
        });
    
    }

}

startGame();
playGame();
