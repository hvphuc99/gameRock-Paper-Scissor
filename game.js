/*====Variables====*/
const rock  = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
let score = [0,0];
const roundCount = document.querySelector('#current-round');
let round = 1;
const weapons = ['rock', 'paper', 'scissor'];
const message = document.querySelector('.message');
let choice = () => {
    return weapons[Math.floor(Math.random() * weapons.length)];
}

/*====Event Listeners====*/
rock.addEventListener('click', () => {playGame('rock', choice());});
paper.addEventListener('click', () => {playGame('paper', choice());});
scissor.addEventListener('click', () => {playGame('scissor', choice());});

/*====Functions====*/
function endGame() {
    if (score[0] > score[1]) {
        message.textContent = 'Game over. You win!';
    } else if (score[0] < score[1]) {
        message.textContent = 'Game over. You lose!';
    }
    else {
        message.textContent = 'Game over. It\'s a tie!';
    }
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}

function playGame(playerChoice, computerChoice) {
    switch(playerChoice) {
        case 'rock':
        if (computerChoice === 'rock') {
            message.textContent = 'Tie!';
        } else if (computerChoice === 'scissor') {
            message.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            score[0]++;
            playerScore.textContent = `${score[0]}`;
        }
        else {
            message.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
            score[1]++;
            computerScore.textContent = `${score[1]}`;
        }
        break;
        case 'paper':
        if (computerChoice === 'paper') {
            message.textContent = 'Tie!';
        } else if (computerChoice === 'rock') {
            message.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            score[0]++;
            playerScore.textContent = `${score[0]}`;
        }
        else {
            message.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
            score[1]++;
            computerScore.textContent = `${score[1]}`;
        }
        break;
        case 'scissor':
        if (computerChoice === 'scissor') {
            message.textContent = 'Tie!';
        } else if (computerChoice === 'paper') {
            message.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            score[0]++;
            playerScore.textContent = `${score[0]}`;
        }
        else {
            message.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
            score[1]++;
            computerScore.textContent = `${score[1]}`;
        }
    }
    round++;
    roundCount.textContent = `${round}`;
    if (round === 5) {
        endGame();
    }
}