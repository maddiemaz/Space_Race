// Get player & properties
let player = document.getElementById('player')
let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'))
let playerRight = parseInt(window.getComputedStyle(player).getPropertyValue('right'))
let playerWidth = parseInt(window.getComputedStyle(player).getPropertyValue('width'))

// Get ground & properties
let ground = document.getElementById('ground')
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue('bottom'))
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue('height'))

// Score
let displayScore = document.getElementById('score')
let score = 0

// Function Variables
let isJumping = false;
let upTime;
let downTime;


// Gameplay Functions
function jump() {
    if (isJumping) return;

    upTime = setInterval(() => {
        if (playerBottom >= groundHeight + 250) {
            clearInterval(upTime)
            downTime = setInterval(() => {
                if(playerBottom <= groundHeight + 10) {
                    clearInterval(downTime)
                    isJumping = false
                }
                playerBottom -= 10
            player.style.bottom = playerBottom + 'px'
            }, 20)
        }
        playerBottom += 10;
        player.style.bottom = playerBottom + 'px'
        isJumping = true
    }, 20)
}

// Increase score by 1 every 100 time
function showScore() {
    score++
    displayScore.innerText = score
}
setInterval(showScore, 100)

function generateObstacle(){
    let obstacles = document.querySelector('.obstacles')
    // Generate new; assign div/class
    let obstacle = document.createElement('div')
    obstacle.setAttribute('class', 'obstacle')
    // Add more after
    obstacles.appendChild(obstacle)

    // Vary interval for new obstacle
    let randomTimeout = Math.floor(Math.random() * 1000) + 1000


    // Assign start position when generated
    let obstacleRight = -30
    let obstacleBottom = 100
    let obstacleWidth = 30
    // Give each new a random height
    let obstacleHeight = Math.floor(Math.random() * 50) + 50
    // Give each new a random color (this doesn't work)
    obstacle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, (${Math.floor(Math.random() * 255)}, (${Math.floor(Math.random() * 255)})`

    // "Animate" / move obstacles from right to left
    function moveObstacle() {
        obstacleRight += 5;
        
        // Get position variables for obstacle
        obstacle.style.right = obstacleRight + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        obstacle.style.width = obstacleWidth + 'px'
        obstacle.style.height = obstacleHeight + 'px'

        // Check for collision
        if(playerRight >= obstacleRight - playerWidth && playerRight <= obstacleRight + obstacleWidth && playerBottom <= obstacleBottom + obstacleHeight) {
            alert(`Game Over! Your Score: ${score}`)
            // Reset
            clearInterval(obstacleInterval)
            clearTimeout(obstacleTimeout)
            location.reload()
        }
    }

    // Set intervals for new obstacles
    let obstacleInterval = setInterval(moveObstacle, 20)
    let obstacleTimeout = setTimeout(generateObstacle, randomTimeout)

}
generateObstacle()

function control(e) {
    if (e.key == 'ArrowUp' || e.key == '') {
        jump()
    }
}

document.addEventListener('keydown', control)