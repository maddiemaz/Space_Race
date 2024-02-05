// Define Text Components
let countdown = document.querySelector('.countdown')
let healthScore = document.querySelector('.healthScore')

let popup = document.querySelector('.popup')
let popupTitle = document.getElementById('popupTitle')
let popupMessage = document.getElementById('popupMessage')

// let image1 = document.getElementById('image1')
// let image2 = document.getElementById('image2')
// let image3 = document.getElementById('image3')

let playButton = document.getElementById('playButton')
let instructionsButton = document.getElementById('instructionsButton')

// Start Menu
popupTitle.innerHTML = 'Space Race'
popupTitle.style.fontSize = '3.25rem'
popupMessage.style.display = 'none'

playButton.style.display = 'block'
instructionsButton.style.display = 'block'

// Instructions Button -> Instructions Menu
instructionsButton.addEventListener('click', () => {
    // Adjust popup contents
    popupTitle.innerHTML = 'Instructions'
    popupTitle.style.fontSize = '2rem'
    popupMessage.style.display = 'block'
    popupMessage.innerHTML = 'Use the arrow keys avoid the obstacles and avoid crashing.'

    playButton.style.display = 'block'
    instructionsButton.style.display = 'none'
})

// Play Button -> Start Game
playButton.addEventListener('click', () => {
    // Move to Game HTML/CSS/JS
    window.location.href = "game_cleaned.html"
})