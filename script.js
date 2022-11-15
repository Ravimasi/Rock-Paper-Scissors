  const computerSelection = getComputerChoice();
  let i = 0
  let humanScore = 0
  let robotScore = 0
  
  function getComputerChoice(){
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
  const arrayResult = []
  function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
      arrayResult.push("Thats a tie!")
    }
    else if(playerSelection.toUpperCase() == "PAPER" & computerSelection.toUpperCase() == "ROCK"){
      arrayResult.push("You've won 1point! Congratulations")
      humanScore ++;
    }
    else if(playerSelection.toUpperCase() == "ROCK" & computerSelection.toUpperCase() == "SCISSORS"){
      arrayResult.push("You've won 1 point! Congratulations")
      humanScore ++;
    }
    else if(playerSelection.toUpperCase() == "SCISSORS" & computerSelection.toUpperCase() == "PAPER"){
      arrayResult.push("You've won 1 point! Congratulations")
      humanScore ++;
    }
    else{
      console.log("Computer won 1 point!")
      robotScore ++
    }
  }
function game(playerSelection){
  
    playRound(playerSelection, getComputerChoice()); 
    console.log(humanScore)
    console.log(robotScore)
    document.getElementById("score-Balance").innerHTML = "Score : CPU " + robotScore + " | " + humanScore + " You";
    
    if(humanScore > robotScore){
     document.getElementById("result").innerHTML = "That's a win! +1 point. Score : CPU " + robotScore + " | " + humanScore + " You";
    }
    else if(humanScore == robotScore){
    document.getElementById("result").innerHTML ="That's a tie! No points given. Score : CPU " + robotScore + " | " + humanScore + " You";
    }
    else if(humanScore >= 5 ){
      do {
        i++;
        document.getElementsByClassName('handGesture')[i-1].removeAttribute("onclick");
        document.getElementById("score-Balance").innerHTML = "You won ! Congratulations! 😁";
      }  
      while (i <=3);
     
    }
    else if(robotScore >= 5 ){
      do {
        i++;
        document.getElementsByClassName('handGesture')[i-1].removeAttribute("onclick");
        document.getElementById("score-Balance").innerHTML = "You lost ! 😥";
      }
      while (i <=3);
      
  
    }
    else{
      document.getElementById("result").innerHTML ="The computer has won! Score : CPU "+ robotScore + " | " + humanScore + " You";
    }
    
  }