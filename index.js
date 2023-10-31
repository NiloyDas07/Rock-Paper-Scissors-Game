function getResult(val){
  function getConputerPick(){
    let num = Math.random() * 3;
    if (num < 1){return 'Rock';}
    else if(num < 2){return 'Paper';}
    else{return 'Scissors'}
  }

  function getWinner(){
    if (playerPick === computerPick){
      score.draws++;
      return 'Draw';
    } else if ((playerPick === 'Rock' && computerPick === 'Scissors') || (playerPick === 'Scissors' && computerPick === 'Paper') || (playerPick === 'Paper' && computerPick === 'Rock')){
      score.wins++;
      return 'Player Wins';
    } else{
      score.losses++;
      return 'Computer Wins';
    }
  }

  function display(){
    

    document.querySelector('#playerText').innerText = `You Picked: ${playerPick}`;

    document.querySelector('#computerText').innerText = `Computer Picked: ${computerPick}`;

    const winnerText = document.querySelector('#winner');
    if (winner === 'Player Wins'){
      winnerText.className = "playerText";
      winnerText.innerText = winner;
    } else if (winner === 'Computer Wins'){
      winnerText.className = 'computerText';
      winnerText.innerText = winner;
    } else{
      winnerText.className = 'neutralText';
      winnerText.innerText = winner;
      console.log(winner);
    }

    document.querySelector('#winText').innerText = "Wins: " + score.wins;

    document.querySelector('#lossText').innerText = "Losses: " + score.losses;

    document.querySelector('#neutralText').innerText = "Draws: " + score.draws;
  }

  const playerPick = val;
  const computerPick = getConputerPick();
  const winner = getWinner();
  display();
}

let score = {wins: 0, losses: 0, draws: 0};
