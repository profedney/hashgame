const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

function handleCellClick(cell) {
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    
    if (checkWin(currentPlayer)) {
      alert(`Jogador ${currentPlayer} venceu!`);
      resetBoard();
      return;
    }
    
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin(player) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  
  return winningCombos.some(combo => {
    return combo.every(index => cells[index].classList.contains(player));
  });
}

function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
  currentPlayer = "X";
}
