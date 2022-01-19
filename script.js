const squaresContainer = document.querySelector("#squares-container");
const button = document.querySelector("button");

button.addEventListener("click", chooseSize);

function chooseSize() {
  let size;

  size = parseInt(prompt("Enter new sky size to paint over (1-100)", "8"));

  if (!isNaN(size) && size < 101 && size > 0) {
    grid(size);
  }
}

function etch(event) {
  event.target.classList.add("etch");
}

function grid(size) {
  // Delete existing grid
  squaresContainer.textContent = "";

  // New number of squares in a side
  squaresContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("square");
      squaresContainer.appendChild(div);
    }
  }

  const squares = [...squaresContainer.querySelectorAll(".square")];

  squares.forEach((square) => square.addEventListener("mouseenter", etch));
  squares.forEach((square) => square.addEventListener("touchstart", etch));
}

grid(8);
