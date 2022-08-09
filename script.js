// first we create function using arrow 

const getUserChoice = userInput => {
    //  Now we add the .toLowerCase() to make the text smaller
       userInput = userInput.toLowerCase();
      //  Here we take the string rock , paper , scissors as a userInput
      if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
      } else {
        console.log('Error!');
      }
    };
    // console.log(getUserChoice('rock'));
    // console.log(getUserChoice('scissors'));
    // console.log(getUserChoice('paper'));
     
    //  Here we get the computerChoice as a function with no parameter
    const getComputerChoice = () => {
      // here we add the Math function to get the whole number between 0 and 3
     const randomNumber = Math.floor(Math.random() * 3);
    //  here we add the computerChoice string
      switch (randomNumber) {
        case 0:
        return 'rock';
        break;
        case 1:
        return 'paper';
        break;
        case 2:
        return 'scissors';
        break;
      }
    };
    // console.log(getComputerChoice());
    // console.log(getComputerChoice());
    // console.log(getComputerChoice());
    
    //  Now we have to determine the winner between user and computer
      const determineWinner = (userChoice, computerChoice) => {
        // here we compare the userChoice and computerChoice
        if (userChoice === computerChoice) {
          return 'Game is tie';
        } 
        if (userChoice === 'rock' && computerChoice === 'paper') {
          return 'Computer win!';
        } 
       
        if (userChoice === 'paper' && computerChoice === 'scissors') {
          return 'You lose';
        } 
        if (userChoice === 'scissors' && computerChoice === 'paper') {
          return 'You win!';
        }
        if (userChoice === 'scissors' && computerChoice === 'rock') {
          return 'You lose';
        }
         if (userChoice === 'bomb' && computerChoice === 'paper', 'rock', 'scissors') {
          return 'You win!';
        }
        
      }
      // console.log(determineWinner('scissors', 'paper'));
      // console.log(determineWinner('paper', 'scissors'));
    
    // Let's start the game by playGame function
      const playGame = () => {
        // here we take the userChoice
       const userChoice = getUserChoice('paper');
      //  and the computer get there choice himself
       const computerChoice = getComputerChoice();
       console.log('You threw: ' + userChoice);
       console.log('The computer threw:' + computerChoice);
       console.log(determineWinner(userChoice, computerChoice));
    };
    //  to play the game we should call the playGame function
    playGame();
    