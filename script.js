  function getComputerChoice(any){
    const randomNumber = (Math.random()*10).toFixed(2);
    const robotNumber = parseFloat(randomNumber);
    console.log(robotNumber)
    if(robotNumber >=6.7){
      return("Scissors")
    }
    else if(robotNumber >=3.4){
      return("Paper")
    }
    else{
      return("Rock")
    }
    
  }
  
  const computerSelection = getComputerChoice();
  let humanScore = 0
  let robotScore = 0
  
  function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
      console.log("Thats a tie!")
    }
    else if(playerSelection.toUpperCase() == "PAPER" & computerSelection.toUpperCase() == "ROCK"){
      console.log("You've won! Congratulations")
      humanScore += 1;
    }
    else if(playerSelection.toUpperCase() == "ROCK" & computerSelection.toUpperCase() == "SCISSORS"){
      console.log("You've won! Congratulations")
      humanScore += 1;
    }
    else if(playerSelection.toUpperCase() == "SCISSORS" & computerSelection.toUpperCase() == "PAPER"){
      console.log("You've won! Congratulations")
      humanScore += 1;
    }
    else{
      console.log("You've lost, try again!")
      robotScore +=1
    }
  }
function game(){
  for(let i = 0; i < 5; i++){
    playRound(prompt(), getComputerChoice()); 
    console.log(humanScore)
    console.log(robotScore)

  }
    if(humanScore > robotScore){
      console.log("The human race has won!")
    }
    else if(humanScore == robotScore){
      console.log("That's a tie!")
    }
    else{
      console.log("The robot race has won!")
    }
  }
game()