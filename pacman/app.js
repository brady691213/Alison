const board = ["pink", "blue", "green", "red", "purple", "orange"];
const myBoard = [];
const tempBoard = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 3, 2, 1],
    [1, 2, 2, 3, 2, 2, 2, 4, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 3, 2, 2, 3, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 3, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 3, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const ghosts = [];
const g = {
    x: "",
    y: "",
    cellSize: 100,
    size: 10,
    size: tempBoard.length,
    ghosts: 5,
    inplay: false
}
const player = {
    pos: 20,
    speed: 4,
    cool: 0,
    pause: false
}

function createBox(templateName, row, col) {
    let newCell = document.querySelector(`#${templateName}-template`).cloneNode(true);
    newCell.attributes.removeNamedItem("id");
    newCell.classList.add(`cell-${row},${col}`);
    newCell.classList.add("dynamic");
    g.grid.appendChild(newCell);
    myBoard.push(newCell);
    return newCell;
}
function createSquare(val, row, col) {
    switch (val) {
        case 1: return createBox("wall", row, col);
        case 2: return createBox("dot", row, col);
        case 3: return createBox("superdot", row, col);
        case 4: return createBox("pacman", row, col);
        default: return createBox("square", row, col);
    }
    console.log("CreateSquare: " + val);
}

function createGame() {

    for(r = 0; r < tempBoard.length; r++) {
        for(c = 0; c < tempBoard[r].length; c++) {
            createSquare(tempBoard[r][c], r, c);
        }
    }

    let colWidths = [];
    for (let i = 0; i < g.size; i++) {
        colWidths.push(g.cellSize);
    }
    g.x = colWidths.map(w => `${w}px`).join(' ');

    g.grid.style.gridTemplateColumns = g.x;
    g.grid.style.gridTemplateRows = g.x;
}

document.addEventListener("DOMContentLoaded", () => {
    g.grid = document.querySelector(".grid");
    g.pacman = document.querySelector(".pacman");
    g.eye = document.querySelector(".eye");
    g.mouth = document.querySelector(".mouth");
    g.ghost = document.querySelector(".ghost");
    //g.ghost.style = "display: none";
    createGame();
    console.log(g);
})

console.log("Pacman loaded.");