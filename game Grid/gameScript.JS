// Gameboard Variables
// -> Array containing all cells:
const cells = Array.from(document.querySelectorAll(".cell"))
// -> Select first 30 cells/top 10 rows & specifies them as enemy territory
const upcomingCells = cells.slice(0, 30)
// -> Select cell 31+/last row & specifies it as player territory
const playerCells = cells.slice(30)
const healthDisplay = document.querySelector(".health")

// Gameplay Variables
// -> enemies dropping in, speed in miliseconds, score based on time survived
let dropCount, speed, score;