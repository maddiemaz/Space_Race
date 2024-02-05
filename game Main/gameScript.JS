// Primarily adapted by Car Demo & Bird Demo (see Read Me)

// Define Text Components
let countdown = document.querySelector('.countdown')
let score = document.querySelector('.score')

// let healthScore = document.querySelector('.healthScore')

let popup = document.querySelector('.popup')
let popupResult = document.getElementById('popupResult')
let popupMessage = document.getElementById('popupMessage')
let popupScore = document.getElementById('popupScore')

let replayButton = document.getElementById('replayButton')
let backtostartButton = document.getElementById('backtostartButton')


// Position of Player @ Start
//  -> Top - match to specified in CSS
let t=42
//   -> Left - match to specified in CSS (which is none, so 0)
let l=10

// Make obstacles invisible until start
document.getElementById("obstacle1").style.display='none'
document.getElementById("obstacle2").style.display='none'
document.getElementById("obstacle3").style.display='none'
document.getElementById("obstacle4").style.display='none'


// Start by pressing key
document.addEventListener("keydown", function(event) {
    // Make obstacles visbile
    document.getElementById("obstacle1").style.display='grid'
    document.getElementById("obstacle2").style.display='grid'
    document.getElementById("obstacle3").style.display='grid'
    document.getElementById("obstacle4").style.display='grid'

    // Move player w arrow keys
    if (event.key == "ArrowLeft"){
        l=l-3
    } else if (event.key == "ArrowUp"){
        t=t-3
    } else if (event.key == "ArrowRight"){
        l=l+3
    } else if (event.key == "ArrowDown"){
        t=t+3
    }
    player.style.top=`${t}vh`
    player.style.left=`${l}vh`
 
    // // Randomize Obstacles appearing
    // setInterval(()=>{
    //     // num=Math.floor(Math.random()*(max-min+1)+min)
    //     // num=Math.floor(Math.random()*((-200)-(-300)+1)+(-300))
    //     num=Math.floor(Math.random()*(400+500+1)-500)
    //     // Only the x-coordinates are affected
    //     document.getElementById("obstacle1").style.top=`${num}px`
    // },2000)
    // setInterval(()=>{
    //     // num=Math.floor(Math.random()*((-100)-(-200)+1)+(-100))
    //     num=Math.floor(Math.random()*(-100+200+1)-100)
    //     document.getElementById("obstacle2").style.top=`${num}px`
    // },4000)
    // setInterval(()=>{
    //     // num=Math.floor(Math.random()*((100)-(-100)+1)+(100))
    //     num=Math.floor(Math.random()*(100+100+1)+100)
    //     document.getElementById("obstacle3").style.top=`${num}px`
    // },3000)
    // setInterval(()=>{
    //     // num=Math.floor(Math.random()*((300)-(200)+1)+(200))
    //     num=Math.floor(Math.random()*(300-200+1)+200)
    //     document.getElementById("obstacle4").style.top=`${num}px`
    // },5000)

    // Obstacle Animations
    document.getElementById("obstacle1").style.animation='obstacle1 2s linear infinite'
    document.getElementById("obstacle2").style.animation='obstacle2 4s linear infinite'
    document.getElementById("obstacle3").style.animation='obstacle3 3s linear infinite'
    document.getElementById("obstacle4").style.animation='obstacle4 5s linear infinite'

    // Scoring & Collision
    // Set score to 0 to start
    n = 0

    // Check for collision & add to score if nah
    setInterval(() => {
        // Set score & increase as time goes on
        document.getElementById("score").innerHTML = `Score: ${n}`
        n = n + 1

        // Add bounding variables for obstacles & player
        let obstacle1 = document.getElementById("obstacle1")
        let obstacle1_bounds = obstacle1.getBoundingClientRect()
        let obstacle2 = document.getElementById("obstacle2")
        let obstacle2_bounds = obstacle2.getBoundingClientRect()
        let obstacle3 = document.getElementById("obstacle3")
        let obstacle3_bounds = obstacle3.getBoundingClientRect()
        let obstacle4 = document.getElementById("obstacle4")
        let obstacle4_bounds = obstacle4.getBoundingClientRect()
        let player = document.getElementById("player")
        let player_bounds = player.getBoundingClientRect()
        

        // End game if player goes out of bounds (in any direction)
        if (player_bounds.left < 0 || player_bounds.right > 1130 || player_bounds.top < 0 || player_bounds.bottom > 700) {
            setTimeout(() => {
                alert(`You crashed!`)
            })
            location.reload()
        }

        // Evaluate if collision occurs
        //  -> if player border is detected between enemy borders, which would consitiute an overlap / collison
        //  -> Need to check conditions of all sides at once, otherwise it would expand parallel when detecting
        //      -> check each side against the two corresponding (same direction) enemy sides; ex. player's R against enemy R & L, player's B against enemy T & B, etc.
        if (((obstacle1_bounds.left < player_bounds.left && player_bounds.left < obstacle1_bounds.right) || 
            (obstacle1_bounds.left < player_bounds.right && player_bounds.right < obstacle1_bounds.right)) && 
            ((obstacle1_bounds.top < player_bounds.top && player_bounds.top < obstacle1_bounds.bottom) || 
            (obstacle1_bounds.top < player_bounds.bottom && player_bounds.bottom < obstacle1_bounds.bottom))) {
            setTimeout(() => {
                alert(`You crashed!`)
            })
            location.reload()
        }
        if (((obstacle2_bounds.left < player_bounds.left && player_bounds.left < obstacle2_bounds.right) || 
            (obstacle2_bounds.left < player_bounds.right && player_bounds.right < obstacle2_bounds.right)) && 
            ((obstacle2_bounds.top < player_bounds.top && player_bounds.top < obstacle2_bounds.bottom) || 
            (obstacle2_bounds.top < player_bounds.bottom && player_bounds.bottom < obstacle2_bounds.bottom))) {
            setTimeout(() => {
                alert(`You crashed!`)
            })
            location.reload()
        }
        if (((obstacle3_bounds.left < player_bounds.left && player_bounds.left < obstacle3_bounds.right) || 
            (obstacle3_bounds.left < player_bounds.right && player_bounds.right < obstacle3_bounds.right)) && 
            ((obstacle3_bounds.top < player_bounds.top && player_bounds.top < obstacle3_bounds.bottom) || 
            (obstacle3_bounds.top < player_bounds.bottom && player_bounds.bottom < obstacle3_bounds.bottom))) {
            setTimeout(() => {
                alert(`You crashed!`)
            })
            location.reload()
        }
        if (((obstacle4_bounds.left < player_bounds.left && player_bounds.left < obstacle4_bounds.right) || 
            (obstacle4_bounds.left < player_bounds.right && player_bounds.right < obstacle4_bounds.right)) && 
            ((obstacle4_bounds.top < player_bounds.top && player_bounds.top < obstacle4_bounds.bottom) || 
            (obstacle4_bounds.top < player_bounds.bottom && player_bounds.bottom < obstacle4_bounds.bottom))) {
            setTimeout(() => {
                alert(`You crashed!`)
            })
            location.reload()
        }
    }, 100)


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