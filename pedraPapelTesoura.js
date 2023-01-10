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
        showResults(`Você ganhou! ${playerSelection} ganha de ${computerSelection}. ${evaluateScore('v')}`);
    } else if (playerSelection === computerSelection) {
        showResults(`Empatou. ${evaluateScore('e')}`);
    } else {
        showResults(`Você perdeu :( ${computerSelection} ganha de ${playerSelection}. ${evaluateScore('d')}`);
    }
}

function printEndGameMessage(playerScore, cpuScore) {
    if (playerScore === cpuScore) {
        return `Placar final: Empate ${playerScore}x${cpuScore}`;
    } else if (playerScore > cpuScore) {
        return `Placar final: Jogador ganhou de ${playerScore}x${cpuScore}`;
    } else {
        return `Placar final: CPU ganhou de ${cpuScore}x${playerScore}`;
    }
}

function evaluateScore(result) {
    timesPlayed++;
    if (result === 'v') {
        playerScore++;
    } else if (result === 'd') {
        cpuScore++;
    }

    if (timesPlayed === 5) {
        let finalResult = printEndGameMessage(playerScore, cpuScore);
        timesPlayed = 0;
        playerScore = 0;
        cpuScore = 0;
        return finalResult;
    }

    return `Placar: ${playerScore}x${cpuScore}`;
}

function playGame(playerSelection) {
    playRound(playerSelection.target.value);
}


function showResults(resultMessage) {
    result.textContent = resultMessage;
}

let playerScore = 0,
    cpuScore = 0,
    timesPlayed = 0,
    timesToReset = 0;

// <div> that is updated with showResults function
const result = document.createElement('div');
result.classList.toggle('result');
document.body.appendChild(result);

const options = document.querySelectorAll('button');
options.forEach(button => {
    button.addEventListener('click', playGame);
});