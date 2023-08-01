var round = 0;
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var players1 = [];
var players2 = [];

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
      cell.setAttribute("id", x + "," + i);
      cell.dataset.value = true;
      cell.addEventListener("click", cellClicking);
      boardRow.appendChild(cell);
    }
  }
}

createCells();

checkTurn(checkRound(round), null);

function cellClicking(event) {
  const clickedCellId = event.target.id;
  const clickedCellValue = event.target.dataset.value;

  if (clickedCellValue === "true") {
    round = Number(round) + 1;
    checkTurn(checkRound(round), clickedCellId);
    console.log(
      `Round ${round}, ${clickedCellValue} droped on position ${clickedCellId}`
    );
  }
}

function checkRound(number) {
  return Number(number) % 2 === 0;
}

function checkTurn(roundBool, dropPosition) {
  if (roundBool === true) {
    player2.style.color = "black";
    player1.style.color = "red";
    let drop = document.getElementById(dropPosition);
    drop.style.backgroundImage = "url('/asset/img/whiteSmall.png')";
    drop.dataset.value = "p2";
    const player = { pName: "p2", roundNum: round, position: dropPosition };
    players2.push(player);
  } else {
    player2.style.color = "red";
    player1.style.color = "black";
    let drop = document.getElementById(dropPosition);
    drop.style.backgroundImage = "url('/asset/img/blkSmall.png')";
    drop.dataset.value = "p1";
    const player = { pName: "p1", roundNum: round, position: dropPosition };
    players1.push(player);
  }
}

function testFunction() {
  /*let p1S = 1;
    let p2S =1;
    const p1 = document.querySelectorAll('div[data-value="p1"]');
    const p2 = document.querySelectorAll('div[data-value="p2"]');*/
  console.log(players1);
  console.log(players2);
  checkResult(players1);
  checkResult(players2);
}

function checkResult(playerArr){
  let lastDrop = playerArr[playerArr.length-1];
  let lastDroper = lastDrop.pName;
  let lastPosition = lastDrop.position.split(',');
  console.log(lastPosition +"=="+lastDroper);
}
