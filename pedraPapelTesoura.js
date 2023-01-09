function getComputerChoice() {
    let range = Math.floor(Math.random() * 3) + 1;
    switch (range) {
        case 1:
            return 'Pedra';
        case 2:
            return 'Tesoura';
        case 3:
            return 'Papel';
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === 'Pedra' && computerSelection === 'Tesoura' ||
        playerSelection === 'Papel' && computerSelection === 'Pedra' ||
        playerSelection === 'Tesoura' && computerSelection === 'Papel') {
        showResults(`Você ganhou! ${playerSelection} ganha de ${computerSelection}`);
        return 'v';
    } else if (playerSelection === computerSelection) {
        showResults('Empatou!');
        return 'e';
    } else {
        showResults(`Você perdeu :( ${computerSelection} ganha de ${playerSelection}`);
        return 'd';
    }
}

function printEndGameMessage(playerScore, cpuScore) {
    if (playerScore === cpuScore) {
        return `O placar final terminou empatado ${playerScore}x${cpuScore}`;
    } else if (playerScore > cpuScore) {
        return `Jogador ganhou de ${playerScore}x${cpuScore}`;
    } else {
        return `CPU ganhou de ${cpuScore}x${playerScore}`;
    }
}

function evaluateScore(result) {
    if (result === 'v') {
        playerScore++;
    } else if (result === 'd') {
        cpuScore++;
    }

    timesPlayed++;

    if (timesPlayed === 5) {
        showResults(printEndGameMessage(playerScore, cpuScore));
        timesPlayed = 0;
        playerScore = 0;
        cpuScore = 0;
    }
}

function playGame(playerSelection) {   
    let result = playRound(playerSelection.target.value);  
    evaluateScore(result);
}

function showResults(resultMessage) {
    const result = document.createElement('div');
    result.textContent = resultMessage;
    result.classList.toggle('result');
    document.body.appendChild(result);
}

let playerScore = 0,
    cpuScore = 0,
    timesPlayed = 0;

const options = document.querySelectorAll('button');

options.forEach(button => {
    button.addEventListener('click', playGame);
});

