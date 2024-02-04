// Define Text Components
let countdown = document.querySelector('.countdown')
let healthScore = document.querySelector('.healthScore')

let popup = document.querySelector('.popup')
let popupResult = document.getElementById('popupResult')
let popupMessage = document.getElementById('popupMessage')
let popupScore = document.getElementById('popupScore')

let replayButton = document.getElementById('replayButton')
let backtostartButton = document.getElementById('backtostartButton')

// // Game Components
// let background = document.querySelector('.background').getBoundingClientRect()
 
// let moveSpeed = 3
let player = document.getElementById('player')
let player_props = player.getBoundingClientRect()

// // // Show/Hide Text Components - Countdown
// let gameState = 'Countdown'

// countdown.style.display = 'block'
// healthScore.style.display = 'none'

// popup.style.display = 'none'
// popupResult.innerHTML = 'none'
// popupMessage.style.display = 'none'
// popupScore.style.display = 'none'

// playButton.style.display = 'none'
// instructionsButton.style.display = 'none'
// replayButton.style.display = 'none'
// backtostartButton.style.display = 'none'

// player.style.display = 'block'

// // // Show/Hide Text Components - Game Play
// let gameState = 'Game_Play'

// countdown.style.display = 'none'
// healthScore.style.display = 'block'

// popup.style.display = 'none'
// popupResult.innerHTML = 'none'
// popupMessage.style.display = 'none'
// popupScore.style.display = 'none'

// playButton.style.display = 'none'
// instructionsButton.style.display = 'none'
// replayButton.style.display = 'none'
// backtostartButton.style.display = 'none'

// player.style.display = 'block'


// Position of Player @ Start
//  -> Top - match to specified in CSS
let t=42
//   -> Left - match to specified in CSS (which is none, so 0)
let l=10

// Move player w arrow keys
document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowLeft"){
    //    alert("Left key");
        l=l-3
    } else if (event.key == "ArrowUp"){
        t=t-3
    //    alert("Up key");
    } else if (event.key == "ArrowRight"){
        l=l+3
    //    alert("Right key");
    } else if (event.key == "ArrowDown"){
        t=t+3
    //    alert("Down key");
    }
    // document.getElementById("player").style.top=`${t}vh`
    // document.getElementById("player").style.left=`${l}vh`

    player.style.top=`${t}vh`
    player.style.left=`${l}vh`
 });








// // // Show/Hide Text Components - Result Popup (Win)
// let gameState = 'End_Win'

// countdown.style.display = 'none'
// healthScore.style.display = 'none'

// popup.style.display = 'flex'
// popupResult.innerHTML = 'Congratulations!'
// popupResult.style.fontSize = '2.5rem'
// popupMessage.style.display = 'You survived the race!'
// popupScore.style.display = 'Your Score: '

// playButton.style.display = 'none'
// instructionsButton.style.display = 'none'
// replayButton.style.display = 'block'
// backtostartButton.style.display = 'block'

// player.style.display = 'none'

// // // Show/Hide Text Components - Result Popup (Lose)
// let gameState = 'End_Lose'

// countdown.style.display = 'none'
// healthScore.style.display = 'none'

// popup.style.display = 'flex'
// popupResult.innerHTML = 'You Crashed!'
// popupResult.style.fontSize = '2.5rem'
// popupMessage.style.display = 'You sustained too much damage!'
// popupScore.style.display = 'none'

// playButton.style.display = 'none'
// instructionsButton.style.display = 'none'
// replayButton.style.display = 'block'
// backtostartButton.style.display = 'block'

// player.style.display = 'none'



// Back to Start Button -> Start Menu
backtostartButton.addEventListener('click', () => {
    // Move to Game HTML/CSS/JS
    window.location.href = "startMenu.html"
})