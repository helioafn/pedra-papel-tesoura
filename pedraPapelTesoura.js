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

function playRound(playerSelection = '', computerSelection = '') {
    const lowercasePlayerSelection = playerSelection.toLowerCase(),
    lowercaseComputerSelection = computerSelection.toLowerCase();

    if (lowercasePlayerSelection === 'pedra' && lowercaseComputerSelection === 'tesoura' ||
        lowercasePlayerSelection === 'papel' && lowercaseComputerSelection === 'pedra' ||
        lowercasePlayerSelection === 'tesoura' && lowercaseComputerSelection === 'papel') {
        console.log(`Você ganhou! ${lowercasePlayerSelection} ganha de ${lowercaseComputerSelection}`);
        return 'v';
    } else if (lowercasePlayerSelection === lowercaseComputerSelection) {
        console.log('Empatou!');
        return 'e'
    } else {
        console.log(`Você perdeu :( ${lowercaseComputerSelection} ganha de ${lowercasePlayerSelection}`);
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

function game() {
    let playerScore = 0,
        cpuScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Sua escolha [Pedra, papel ou tesoura]:', '');
        let computerChoice = getComputerChoice();
        let result = playRound(playerSelection, computerChoice);
        
        if ( result === 'v') {
            playerScore++;
        } else if (result === 'd') {
            cpuScore++;
        }
    }

    console.log(printEndGameMessage(playerScore, cpuScore));
}

game();