  const computerSelection = getComputerChoice();
  function playAgain(){
    location.reload()
  }
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
      document.getElementById("result").innerHTML += "[Log: "+ time +("]: Thats a tie! <br>")
    }
    else if(playerSelection.toUpperCase() == "PAPER" & computerSelection.toUpperCase() == "ROCK"){
      humanScore ++;
      document.getElementById("result").innerHTML += "[Log: "+ time + ("]: You've won 1 point! Score : " + robotScore + " Vs "+ humanScore + "<br>")
    }
    else if(playerSelection.toUpperCase() == "ROCK" & computerSelection.toUpperCase() == "SCISSORS"){
      humanScore ++;
      document.getElementById("result").innerHTML += "[Log: "+time + ("]: You've won 1 point! Score : " + robotScore + " Vs "+ humanScore + "<br>")
    }
    else if(playerSelection.toUpperCase() == "SCISSORS" & computerSelection.toUpperCase() == "PAPER"){
      humanScore ++;
      document.getElementById("result").innerHTML += "[Log: "+ time + ("]: You've won 1 point! Score : "+  robotScore + " Vs "+ humanScore + "<br>")
    }
    else{
      robotScore ++
      document.getElementById("result").innerHTML += "[Log: "+ time + ("]: Computer won 1 point! " +  robotScore + " Vs "+ humanScore + "<br>")
      
    }
    
  }
function game(playerSelection){
  
    playRound(playerSelection, getComputerChoice()); 
    console.log(humanScore)
    console.log(robotScore)
    document.getElementById("score-Balance").innerHTML = "Score : 🤖 CPU " + robotScore + " VS " + humanScore + " You 👱‍♂️";
    
    
    if(humanScore >= 5 ){
      for (let index = 0; index < Gesture.length; index++) {
        Gesture[index].removeAttribute("onclick")
      }
        document.getElementById("score-Balance").innerHTML = "You won ! Congratulations! 😁";
        const btn = document.createElement("button");
        const att = document.createAttribute("class");
        const att2 = document.createAttribute("onclick");
        att2.value = "playAgain()"
        att.value = "play-Again"
        btn.setAttributeNode(att)
        btn.setAttributeNode(att2)
        btn.innerHTML = "Play Again";
        document.getElementById("result").appendChild(btn);
    }

    else if(robotScore >= 5){
      for (let index = 0; index < Gesture.length; index++) {
        Gesture[index].removeAttribute("onclick")
        console.log(index + " e "+ Gesture.length)
      }
        const btn = document.createElement("button");
        const att = document.createAttribute("class");
        const att2 = document.createAttribute("onclick");
        att2.value = "playAgain()"
        att.value = "play-Again"
        btn.setAttributeNode(att)
        btn.setAttributeNode(att2)
        btn.innerHTML = "Play Again";
        document.getElementById("result").appendChild(btn);
        document.getElementById("score-Balance").innerHTML = "You lost ! 😥";
      }
    
  }