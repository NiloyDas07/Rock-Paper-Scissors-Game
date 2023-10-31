function getResult(val){
  function getConputerPick(){
    let num = Math.random() * 3;
    if (num < 1){return 'rock';}
    else if(num < 2){return 'paper';}
    else{return 'scissors'}
  }

  function getWinner(){
    if (playerPick === computerPick){
      return 'Tie.';
    } else if ((playerPick === 'rock' && computerPick === 'scissors') || (playerPick === 'scissors' && computerPick === 'paper') || (playerPick === 'paper' && computerPick === 'rock')){
      score++;
      return 'Player Wins'
    } else{
      score--;
      return 'Computer Wins'
    }
  }

  function display(){
    document.querySelector('.result').innerHTML = `<h3>You Picked: ${playerPick}</h3><h3>Computer Picked: ${computerPick}</h3><h3>${winner}</h3>`

    document.querySelector('.score').innerHTML = `<h3>Current Score: ${score}</h3>`
  }

  const playerPick = val;
  const computerPick = getConputerPick();
  const winner = getWinner();
  display();
}

let score = 0;
