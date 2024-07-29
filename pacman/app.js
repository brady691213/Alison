const board = ["pink", "blue", "green", "red", "purple", "orange"];
const myBoard = [];
const tempBoard = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 1,
    1, 2, 1, 3, 1, 1, 1, 1, 1, 2, 1,
    1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1,
    1, 2, 1, 1, 1, 3, 1, 1, 1, 2, 1,
    1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1,
    1, 2, 1, 1, 3, 1, 1, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
const ghosts = [];
const g = {
    x: "",
    y: "",
    h: 100,
    size: 25,
    ghosts: 5,
    inplay: false
}
const player = {
    pos: 20,
    speed: 4,
    cool: 0,
    pause: false
}

// function createSquare(val) {
//     const div = document.createElement("div");
//     div.classList.add("box");
//     if (val === 1) {
//         div.classList.add("wall");
//     }
//     if (val === 2) {
//         const dot = document.createElement("div");
//         dot.classList.add("dot");
//         div.append(dot);
//     }
//     if (val === 3) {
//         const dot = document.createElement("div");
//         dot.classList.add("superdot");
//         div.append(dot);
//     }
//     g.grid.append(div);
//     myBoard.push(div);
// }

// function createGame() {
//     for (let cell of tempBoard) {
//         createSquare(cell);
//     }
//
//     let colWidths = [];
//     for (let i = 0; i < g.size; i++) {
//         colWidths.push(g.h);
//     }
//     g.x = colWidths.map(w => `${w}px`).join(' ');
//
//     g.grid.style.gridTemplateColumns = g.x;
//     g.grid.style.gridTemplateRows = g.x;
// }

document.addEventListener("DOMContentLoaded", () => {
    g.grid = document.querySelector(".grid");
    g.pacman = document.querySelector(".pacman");
    g.eye = document.querySelector(".eye");
    g.mouth = document.querySelector(".mouth");
    g.ghost = document.querySelector(".ghost");
    //g.ghost.style = "display: none";

    //createGame();

    console.log(g);
})

console.log("Pacman loaded.");