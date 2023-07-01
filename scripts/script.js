

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
    const player = document.querySelector('.player-img');
    const ai = document.querySelector('.ai-img');
    setTimeout(()=>
    {
        player.id = 'animatedElementDown';
        ai.id = 'animatedElementUp';
    },100
    )
    player.id = "";
    ai.id = "";
    player.addEventListener('animationend', function(){
    player.src = `images/${playerSelection}_rev.png`;

    });
    ai.addEventListener('animationend', function(){
        ai.src = `images/${computerSelection}.png`;
        });
    

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


const choices = document.querySelectorAll('.p-selection li');

choices.forEach(function(item){
    item.addEventListener('click', function(e)
    {
        const target = e.target;
        const atrVal = target.getAttribute('data-sel');
        const aiselection = getComputerChoice();
        playRound(atrVal, aiselection);
    })
});












