const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('#points');
let roundResult = '';

rock.addEventListener('click', function(){
    const playerWeapon = "rock";
    const comuterWeapn = getComputerChoice();

    OneRound(playerWeapon,comuterWeapn);
    updateResult(roundResult);
});
paper.addEventListener('click', function(){
    const playerWeapon = "paper";
    const comuterWeapn = getComputerChoice();

    OneRound(playerWeapon,comuterWeapn);
    updateResult(roundResult);
});
scissors.addEventListener('click', function(){
    const playerWeapon = "scissors";
    const comuterWeapn = getComputerChoice();

    OneRound(playerWeapon,comuterWeapn);
    updateResult(roundResult);

});

function updateResult(result){
const showResult = document.createElement('h3');
showResult.style.cssText = 'color:orange; font-size: 26px;';
const scores = document.createElement('p');
showResult.textContent = roundResult;
scores.style.cssText = 'rgb(103, 101, 101);';
container.innerHTML = '';
container.appendChild(showResult);
scores.textContent = `Player: ${playerScore} | Computer: ${compScore}`;
container.appendChild(scores);
winner(playerScore,compScore);

};

function winner(playerscore,compscore){
    if(playerscore === 5){
        const playerWon = document.createElement('h2');
        playerWon.style.cssText = 'color:orange;font-size:42px';
        playerWon.textContent = 'You won the game 😸'
        container.appendChild(playerWon);
        showRestartButton();
        
    }
    else if(compscore === 5){
        const compWon = document.createElement('h2');
        compWon.style.cssText = 'color:orange;font-size:42px;';
        compWon.textContent = 'You lost the game 😿'
        container.appendChild(compWon);
        showRestartButton();
        
    }
};
function showRestartButton(){
    disableButtons();
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    container.appendChild(restartButton);
    restartButton.addEventListener('click',restartGame);
}
function restartGame(){
    playerScore = 0;
    compScore = 0;
    container.innerHTML = '';
    enableButtons();

}
function enableButtons(){
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}
function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    
}

function getComputerChoice(choice){
    let choices = ["rock", "paper", "scissors"];
    Choice = (choices[(Math.floor(Math.random() * choices.length))]);
    return Choice;
}
function playerChoice(pChoice){
    pChoice = String(window.prompt("Type ur weapon", ""));
    const weapon = pChoice.toLowerCase();
    return weapon;

}
function OneRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        roundResult= "Draw";
    }
    else if((playerChoice == "rock" && computerChoice == "scissors")||
    (playerChoice == "paper" && computerChoice == "rock")||
    (playerChoice == "scissors" && computerChoice == "paper")){
        roundResult = "You won round!";
        return playerScore++;
    }
    else{
        roundResult = "Computer won round!";
        return compScore++;
    }
}
/*function game(){
    for(let i = 0; i<5; i++){
        const compWeapon = getComputerChoice();
        const playerWeapon = playerChoice()
        OneRound(playerWeapon,compWeapon)
    }
    console.log("Your score",playerScore);
    console.log("Computer score",compScore);
    if(playerScore>compScore){
        console.log("You WON GAME!");
    }
    else if(playerScore<compScore){
        console.log("You LOST GAME");
    }
    else{
        console.log("DRAW");
    }
}*/
let playerScore = 0;
let compScore = 0;
