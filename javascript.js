let gridContainer = document.getElementById("gridContainer");

function colorChange(element, color) {
  element.style.backgroundColor = color;
}

function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    gridContainer.appendChild(row);
    row.className = "row";

    for (let e = 0; e < size; e++) {
      let column = document.createElement("div");
      row.appendChild(column);
      column.className = "column";
      column.addEventListener("mouseover", () =>
        colorChange(column, randomRbg())
      );
    }
  }
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

let newGrid = document.getElementById("newGrid");
newGrid.addEventListener("click", function () {
  let size = parseInt(
    prompt("What number of squares per side would you like?"),
    10
  );
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  clearGrid();
  generateGrid(size);
});

// Initial grid creation on page load
generateGrid(16);

function randomRbg() {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);

  return `rgb(${red} ,${blue} ,${green})`;
}
