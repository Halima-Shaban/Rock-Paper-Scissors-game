const game = () => {
    let pScore = 0;
    let cScore = 0;

const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
   
    playBtn.addEventListener("click",() => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    });
};

const playMach = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".Plyaer-hand");
    const computerHand = document.querySelector(".Computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
        hand.addEventListener("animationed", function() {
            this.style.animation = "";
        });
    });
    const computerOptions = ["rock","paper","scissors"];
    
    options.forEach(Option =>{
        Option.addEventListener("click",function() {
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
                compareHands(this.textContent, computerChoice);
                playerHand.src = `../images/${this.textContent}.png`;
                computerHand.src = `../images/${computerChoice}.png`;

            },2000);

            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";

        }); 
    })
};

const updateScore = () =>{
    const PlayerScore = document.querySelector(".plaer-score p");
    const computerScore = document.querySelector(".Computer-score p");
    PlayerScore.textContent = pScore;
    computerScore.textContent = cScore;

}

const compareHands = (playerChoice, computerChoice) =>{
    const winner = document.querySelector(".winner");
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a tie';
        return;
    }

    if(playerChoice === 'rock'){
       if(computerChoice === 'scissors'){
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
    }else {
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
    }

}

     if(playerChoice === 'paper'){
       if(computerChoice === 'scissors'){
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
    }else {
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
    }

}

     if(playerChoice === 'scissors'){
       if(computerChoice === 'rock'){
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
    }else {
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
    }

}
}

startGame();
playMach(); 

};

game();