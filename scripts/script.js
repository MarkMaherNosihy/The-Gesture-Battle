

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
    ai.src = 'images/rock.png';
    player.src = 'images/rock_rev.png';
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

function HandleResult(res, scores)
{
    const resText = document.getElementsByClassName("result-text")[0];
    console.log(resText);
    resText.classList.add('textAnim');
    resText.addEventListener('animationend', function()
    {
        resText.classList.remove('textAnim');
        resText.textContent = "";
    });

    if(res == 1)
    {
        if(scores.playerScore  >= 5)
        {
             resText.textContent = "You have won the game! Congratulations!";
             scores.playerScore = 0;
             scores.aiScore = 0;
        }
        else
        {
            resText.textContent = "You have won this round";
        }

        resText.style.color = 'lawngreen';
    }
    else if ( res == -1)
    {
        if(scores.aiScore >= 5)
        {
             resText.textContent = "You have lost the game! Better luck next time!";
             scores.playerScore = 0;
             scores.aiScore = 0;
        }
        else
        {
            resText.textContent = "You have lost this round";
        }
        resText.style.color = 'red';
    }
    else
    {
        resText.textContent = "Draw!";
        resText.style.color = 'orange';   
        

    }
}




function game(){
    const choices = document.querySelectorAll('.p-selection li');
    const playerScoreElement = document.getElementById('playerScore');
    const aiScoreElement = document.getElementById('aiScore');
    const scores = {
         playerScore: 0,
            aiScore: 0
    };

    choices.forEach(function(item){
        item.addEventListener('click', function(e)
        {
            //revert back to original images

            //Extracting choice data (rock,paper,scissors from data-sel attr).
            const target = e.target;
            const atrVal = target.getAttribute('data-sel');

            //Getting computer random choice and playing a single round per click.
            const aiselection = getComputerChoice();
            let result = playRound(atrVal, aiselection);



            //Updating the scores of the Player and AI
            if (result == 1) scores.playerScore++;
            else if(result == -1) scores.aiScore++;

            //Waiting 2 seconds for the round animation to end before revealing the score.
            setTimeout(()=>{
            HandleResult(result, scores);
            playerScoreElement.textContent = scores.playerScore;
            aiScoreElement.textContent = scores.aiScore;
            //Printing out the result to screen and animating it.
            },2000);
            
        })
    });
}
game();












