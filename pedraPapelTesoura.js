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
    const lPlayerSelection = playerSelection.toLowerCase(),
    lComputerSelection = computerSelection.toLowerCase();

    if (lPlayerSelection === 'pedra' && lComputerSelection === 'tesoura' ||
        lPlayerSelection === 'papel' && lComputerSelection === 'pedra' ||
        lPlayerSelection === 'tesoura' && lComputerSelection === 'papel') {
        console.log(`Você ganhou! ${lPlayerSelection} ganha de ${lComputerSelection}`);
        return 'v';
    } else if (lPlayerSelection === lComputerSelection) {
        console.log('Empatou!');
        return 'e'
    } else {
        console.log(`Você perdeu :( ${lComputerSelection} ganha de ${lPlayerSelection}`);
        return 'd';
    }
}

function printEndGameMessage(playerScore, cpuScore) {
    if (playerScore === cpuScore) {
        return `O placar final terminou empatado ${playerScore}x${cpuScore}`;
    } else if (playerScore > cpuScore) {
        return `Jogador ganhou por ${playerScore}x${cpuScore}`;
    } else {
        return `CPU ganhou por ${cpuScore}x${playerScore}`;
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