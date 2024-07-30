const board = ["pink", "blue", "green", "red", "purple", "orange"];
const myBoard = [];
const tempBoard = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 1],
    [1, 2, 1, 3, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 3, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 3, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const ghosts = [];
const g = {
    x: "",
    y: "",
    h: 100,
    size: 25,
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

function createBox(templateName) {
    let newCell = document.querySelector(`#${templateName}-template`).cloneNode(true);
    newCell.attributes.removeNamedItem("id");
    g.grid.appendChild(newCell);
    myBoard.push(newCell);
    return newCell;
}
function createSquare(val) {
    switch (val) {
        case 1: return createBox("wall");
        case 2: return createBox("dot");
        case 3: return createBox("superdot");
    }
    console.log("CreateSquare: " + val);
}

function createGame() {

    for(r = 0; r < 9; r++) {
        let row = tempBoard[r];
        for(c = 0; c < 9; c++) {
            let col = row[c];
            createSquare(col);
            // if (g.grid.querySelectorAll(".boxStart").length > 100) {
            //     debugger;
            // }
        }
    }

    let colWidths = [];
    for (let i = 0; i <= g.size; i++) {
        colWidths.push(g.h);
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