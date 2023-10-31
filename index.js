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
    }

    score.displayScore();
  }

  const playerPick = val;
  const computerPick = getConputerPick();
  const winner = getWinner();
  display();
}

function resetScore(){
  localStorage.clear();

  for (let key in score ){
    if (typeof score[key] === 'function'){
      continue;
    }
    score[key] = 0;
  }

  score.displayScore();
}

let scoreStorage = localStorage.getItem('score');
let score = JSON.parse(scoreStorage) || {wins: 0, losses: 0, draws: 0};

score.displayScore = function() {
  document.querySelector('#winText').innerText = "Wins: " + score.wins;

  document.querySelector('#lossText').innerText = "Losses: " + score.losses;

  document.querySelector('#neutralText').innerText = "Draws: " + score.draws;

  localStorage.setItem('score', JSON.stringify(score));
};

score.displayScore();
