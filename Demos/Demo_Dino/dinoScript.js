// Tutorial: https://www.youtube.com/watch?v=i7nIutSLvdU

const player = document.getElementById('player')
const obstacle = document.getElementById('obstacle')

function jump() {
    // Add jump animation (CSS)
    if (player.classList != 'jump'){
        player.classList.add('jump')

        setTimeout(function() {
            player.classList.remove('jump')
        }, 300)
    }
}

let isAlive = setInterval(function() {
    // Get current player Y-position
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    // Get current obstacle X-position
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))

    // Detect collison
    if (obstacleLeft < 50 && obstacleLeft > 0 && playerTop >= 140) {
        alert(`Game Over!`)
    }

}, 500)

document.addEventListener('keydown', function (event) {
    jump()
})