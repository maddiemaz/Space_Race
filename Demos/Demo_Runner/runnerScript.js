// Tutorial: https://www.youtube.com/watch?v=POpsRGpiAsI

// Game Variables
let player = document.getElementById('player')
let obstacle = document.getElementById('obstacle')

let counter = 0

// Game Functions
function jump() {
    if(player.classList != "animate") {
        player.classList.add("animate")
    }
    setTimeout(function() {
        player.classList.remove("animate")
        counter++
    }, 500)
}

let lose = setInterval(function() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    let blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))

    if (blockLeft < 20 && blockLeft > 0 && playerTop >= 130){
        obstacle.style.animation = "none"
        obstacle.style.display = "none"

        alert(`Score: ${counter}`)
        counter = 0
    }

}, 10)