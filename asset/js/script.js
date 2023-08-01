var round = 1;
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

function createCells() {
  let board = document.getElementById("board");

  for (let i = 0; i < 15; i++) {
    const boardRow = document.createElement("div");
    boardRow.setAttribute("class", "boardRow");
    boardRow.setAttribute("id", "boardRow" + i);
    board.appendChild(boardRow);
    for (let x = 0; x < 15; x++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.setAttribute("id",  i + "," + x);
      cell.dataset.value = true;
      cell.addEventListener("click", cellClicking);
      boardRow.appendChild(cell);
    }
  }
}

createCells();

checkTurn(checkRound(round),null);

function cellClicking(event) {
  const clickedCellId = event.target.id;
  const clickedCellValue = event.target.dataset.value;

  if (clickedCellValue === "true") {
    round = Number(round) + 1;
    checkTurn(checkRound(round),clickedCellId);
    console.log(`Round ${round}, ${clickedCellValue} droped on position ${clickedCellId}`);
  }
}

function checkRound(number) {
  return Number(number) % 2 === 0;
}

function checkTurn(roundBool, dropPosition) {
  if (roundBool === true) {
    player2.style.color = "red";
    player1.style.color = "black";
    let drop = document.getElementById(dropPosition);
    drop.style.backgroundImage=  "url('/asset/img/blkSmall.png')";
    drop.dataset.value = 'p1';
  } else {
    player2.style.color = "black";
    player1.style.color = "red";
    let drop = document.getElementById(dropPosition);
    drop.style.backgroundImage=  "url('/asset/img/whiteSmall.png')";
    drop.dataset.value = 'p2';
  }
}
