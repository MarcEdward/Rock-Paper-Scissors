function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        computerChoice = "rock"
    } else if (computerChoice === 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Rock, paper, or scissors?");
        
        if (humanChoice === null) {
            return null;
        }

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }
            
        const tryAgain = confirm("Sorry, you've entered an invalid input. Would you like to try again?");
        if (!tryAgain) {
            return null;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        if (!humanChoice) {
            const contGame = confirm("Would you like to continue the game and concede this round?")
            if (!contGame) {
                console.log("You've cancelled the game.")
                alert("You've cancelled the game.");
                return null
            }
        }

        playRound(humanChoice, computerChoice);

        if (humanChoice && computerChoice) {
            console.log(
                `Round ${i + 1}:
                Computer chose ${computerChoice}
                You chose ${humanChoice}
                Running Score: (Computer: ${computerScore} You: ${humanScore})`
            )
        } else {
            console.log(
                `Round ${i + 1}:
                You've conceded this round.
                Running Score: (Computer: ${computerScore} You: ${humanScore})`
            )
        }
        
    }

    function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice === "rock" && computerChoice === "paper") || 
            (humanChoice === "paper" && computerChoice === "scissors") || 
            (humanChoice === "scissors" && computerChoice === "rock")) {

            alert(`You lose!
                Computer: ${++computerScore} You: ${humanScore}`);

        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")) {

            alert(`You win!
                Computer: ${computerScore} You: ${++humanScore}`);

        } else if (humanChoice === null) {
            alert(`You have not chosen anything. You lose this round.
                Computer: ${++computerScore} You: ${humanScore}`);

        }else {
            alert(`It's a draw!
                Computer: ${computerScore} You: ${humanScore}`);
        }

    }

    if (computerScore > humanScore) {
        alert(`Sorry, you lost the game. Final scores are:
            Computer: ${computerScore}
            You: ${humanScore}`)
    } else if (computerScore < humanScore) {
        alert(`Congrats! You won the game! Final scores are:
            Computer: ${computerScore} 
            You: ${humanScore}`)
    } else {
        alert("You've played as well as the computer. It's a draw!")
    }
}

playGame()