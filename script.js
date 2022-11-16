  const computerSelection = getComputerChoice();
  function addZero(j) {
    new Date()
    if (j < 10) {j = "0" + j}
    return j;
  }
  let Gesture = document.getElementsByClassName('handGesture')
   
    
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
  function playRound(playerSelection, computerSelection){
  const d = new Date()
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
      document.getElementById("result").innerHTML += "Log: " + time +("| Thats a tie! <br>")
    }
    else if(playerSelection.toUpperCase() == "PAPER" & computerSelection.toUpperCase() == "ROCK"){
      document.getElementById("result").innerHTML += "Log: " + time + ("| You've won 1 point! Congratulations <br>")
      humanScore ++;
    }
    else if(playerSelection.toUpperCase() == "ROCK" & computerSelection.toUpperCase() == "SCISSORS"){
      document.getElementById("result").innerHTML += "Log: " + time + ("| You've won 1 point! Congratulations <br>")
      humanScore ++;
    }
    else if(playerSelection.toUpperCase() == "SCISSORS" & computerSelection.toUpperCase() == "PAPER"){
      document.getElementById("result").innerHTML += "Log: " + time + ("| You've won 1 point! Congratulations <br>")
      humanScore ++;
    }
    else{
      document.getElementById("result").innerHTML += "Log: " + time + ("| Computer won 1 point! <br>")
      robotScore ++
    }
  }
function game(playerSelection){
  
    playRound(playerSelection, getComputerChoice()); 
    console.log(humanScore)
    console.log(robotScore)
    document.getElementById("score-Balance").innerHTML = "Score : CPU " + robotScore + " | " + humanScore + " You";
    
    
    if(humanScore >= 5 ){
      for (let index = 0; index < Gesture.length; index++) {
        Gesture[index].removeAttribute("onclick")
        console.log(index + " e "+ Gesture.length)
      }
        document.getElementById("score-Balance").innerHTML = "You won ! Congratulations! 😁";
   
    }

    else if(robotScore >= 5){
      for (let index = 0; index < Gesture.length; index++) {
        Gesture[index].removeAttribute("onclick")
        console.log(index + " e "+ Gesture.length)
      }
        document.getElementById("score-Balance").innerHTML = "You lost ! 😥";
      }
    
  }