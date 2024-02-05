//Tutorial: https://www.youtube.com/watch?v=nmcRj-Y8E_w

// Gameboard Variables
// -> Array containing all cells:
const cells = Array.from(document.querySelectorAll(".cell"))
// -> Select first 30 cells/top 10 rows & specifies them as enemy territory
const enemyCells = cells.slice(0, 30)
// -> Select cell 31+/last row & specifies it as player territory
const playerCells = cells.slice(30)
const scoreDisplay = document.querySelector(".score")

// Gameplay Variables
// -> enemies dropping in, speed in miliseconds, score based on time survived
let dropCount, speed, score

reset()

// Arrow Key control
document.addEventListener("keydown", e => {
    // Start game on first keystroke
    if (!dropCount) {
        startGame();
    }
    
    // Select player piece to move
    const player = document.querySelector(".player")

    // select keystroke & limit movement to player cells only (only allow movement if that next cell is within the player cells)
    if (e.key === "ArrowRight" && playerCells.includes(player.parentElement.nextElementSibling)) {
        // Start at player's current div, get parent element (cell), get next sibiling (right neighboring cell), move player to that new cell
        player.parentElement.nextElementSibling.appendChild(player)
    }
    if (e.key === "ArrowLeft" && playerCells.includes(player.parentElement.previousElementSibling)) {
        // Start at player's current div, get parent element (cell), get prior sibiling (left neighboring cell), move player to that new cell
        player.parentElement.previousElementSibling.appendChild(player)
    }
})

function reset() {
    // Reset basics
    dropCount = 0
    speed = 1000
    score = 0
    scoreDisplay.innerHTML = "0"

    // Clear board
    cells.forEach(cell => cell.innerHTML = "")
    // Reset player at start spot
    playerCells[1].innerHTML = 'div class="player"></div>'
}

function startGame() {
    reset()
    loop()
}

// Enemy Loop
function loop() {
    // Initial; no collison, so game won't stop
    let stopGame = false;

    console.log(dropCount)

    // Backwards shift everything down and add new at top
    for (let i = enemyCells - 1; i >= 0; i--) {
        // Where the enemy is now
        const cell = enemyCells[i]
        // Where the enemy will appear when dropped by 1 row
        //  -> since there are 3 cells in each row, moving down 1 row means moving AHEAD 3 cells*
        const nextCell = cells[i + 3]
        const enemy = cell.children[0]

        // If no enemy in cell, no need to loop that cell
        if (!enemy) {
            continue
        }

        // physically move enemy from old to new
        nextCell.appendChild(enemy);

        // check for collision; if player cell is in next cell, there will be a collison
        if (playerCells.includes(nextCell)) {
            if (nextCell.querySelector(".player")) {
                stopGame = true
            } else {
                // Add points as you survive
                score++
                scoreDisplay.innerHTML = score
                // Decrease time between enemy appearances, but capped
                speed = Math.max(100, speed - 25)
                // Remove enemy if no collision
                enemy.remove()
            }
        }
    }

    // Add new enemy every other drop
    if(dropCount % 2 === 0) {
        // Put new enemy in column 1, 2, or 3 randomly
        const position = Math.floor(Math.random() *3)
        enemyCells[position].innerHTML = '<div class="enemy></div>'
    }

    // Start collision opportunity / enemy drop
    //  -> stop game if collision, else step it up
    if (stopGame) {
        alert(`Your Score: ${score}. Close this window to play again.`)
        reset ()
    } else {
        // Increase drop count
        dropCount++
        // Increase speed / reduce delay to increase enemy loop pace
        setTimeout(loop, speed)
    }
}