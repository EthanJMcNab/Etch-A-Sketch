// Creates Body Element
const body = document.querySelector("body");

// Creates and appends the title to Body Element
const titleText = document.createTextNode("Etch-A-Sketch!");
const title = document.createElement("h1");
title.appendChild(titleText);
body.appendChild(title);

// Creates and appends the Etch-A-Sketch container
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

// Creates grid size
let gridSize = 16;

// Creates variable for if mouse is pressed down
let isMouseDown = false;

// Create reset button
addResetButton()

// Create grid
createGrid(gridSize);

function createGrid(gridSize){
    // Creates and appends a grid of squares based on gridSize
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-cell");

            // Prevent dragstart event to disable dragging
            square.addEventListener("dragstart", function (event) {
                event.preventDefault();
            });

            // Mouse down event to start dragging
            square.addEventListener("mousedown", function () {
                isMouseDown = true;
            });

            // Mouse up event to stop dragging
            square.addEventListener("mouseup", function () {
                isMouseDown = false;
            });

            // Mouse enter event to fill the square when dragging
            square.addEventListener("mouseenter", function () {
                if (isMouseDown) {
                    square.style.backgroundColor = "black";
                }
            });

            container.appendChild(square);
        }
    }
}

// Create a button to reset all squares to white
function addResetButton(){
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", function () {

        // Set all squares to white
        const squares = document.querySelectorAll(".grid-cell");
        squares.forEach((square) => {
            square.style.backgroundColor = "white";
        });
    });

    // Append the reset button to the body
    body.appendChild(resetButton);
}