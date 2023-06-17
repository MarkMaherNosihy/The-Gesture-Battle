

function getComputerChoice()
{
    let randomNumber = Math.floor( (Math.random()* 3) + 1);
    switch(randomNumber)
    {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors"
            break;
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection == playerSelection)
    {
        return 0;
    }
    else if(playerSelection == "scissors" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "rock" && computerSelection == "scissors")
    {
        return 1;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors" ||
            playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "scissors" && computerSelection == "rock")
    {
        return -1;
    }
    
   
}

function game()
{
    let computerScore = 0;
    let playerScore = 0;
    //Game loop
    while(playerScore < 3 && computerScore < 3)
    {
        let playerSelection = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
        if(!checkValidation(playerSelection))
        {
            alert("Please enter a valid answer");
            continue;
        }
        let computerSelection = getComputerChoice();

        let res = playRound(playerSelection, computerSelection)
        switch(res)
        {
            case 1:
                playerScore++;
                console.log(`You won this round! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
                break;
            case -1:
                computerScore++;
                console.log(`You Lost this round! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
                break;
            case 0:
                console.log("It's a Draw");
                break;
        }
    }
    if(playerScore == 3)
    {
        console.log("You won the battle!");
    }
    else
    {
        console.log("Oh no! You lost the battle!");
    }

}
function checkValidation(userPrompt)
{
    userPrompt = userPrompt.toLowerCase();
    if(userPrompt == "rock" || userPrompt == "paper" || userPrompt == "scissors")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function capitalize(word)
{
    return word[0].toUpperCase() + word.slice(1, word.length);
}
game();