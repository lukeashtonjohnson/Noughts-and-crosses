let gameSetup = {
  currentPlayer: "O",
  won: false,
}

let { currentPlayer, won } = gameSetup;

let boxes = document.querySelectorAll('.box');
    boxes.forEach( box => box.addEventListener('click', () => place(box) ) );

let place = box => { // box
  if( box.innerText !== "" || won ) return;
  box.innerText = currentPlayer;

  currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";
  checkGameBoard();
  document.querySelector('.player').innerText = currentPlayer;
}

let checkGameBoard = () => {
  
  for( let index = 0; index <= 2; index++ ) {
      checkWinner(
        document.getElementById(`0_${index}`).innerText,
        document.getElementById(`1_${index}`).innerText,
        document.getElementById(`2_${index}`).innerText
      );
      checkWinner(document.getElementById(`${index}_0`).innerText,
        document.getElementById(`${index}_1`).innerText,
        document.getElementById(`${index}_2`).innerText
      );
  }
  checkWinner(
    document.getElementById(`0_0`).innerText,
    document.getElementById(`1_1`).innerText,
    document.getElementById(`2_2`).innerText
  );
  checkWinner(
    document.getElementById(`0_2`).innerText,
    document.getElementById(`1_1`).innerText,
    document.getElementById(`2_0`).innerText
  );
}

let checkWinner = ( first, second, third ) => {
  if(first !== "" && first === second && first === third ) {
    showWinningMessage();
  }
}

let showWinningMessage = () => {
  let body = document.querySelector('body');
    let winningMessage = document.createElement('p');
        winningMessage.classList.add('winning-message');
    let winningText = document.createTextNode(`${currentPlayer}'s is the Winner`);
        winningMessage.appendChild( winningText );

        body.append(winningMessage);

    let button = document.createElement('button');
        button.innerText = 'PLAY AGAIN';
        body.append( button );

        button.addEventListener('click', ()=> document.location.reload(true) )
        won = true;
}