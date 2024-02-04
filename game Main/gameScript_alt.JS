// Define Text Components
// let countdown = document.querySelector('.countdown')
// let healthScore = document.querySelector('.healthScore')
let scoreValue = document.querySelector('.scoreValue')
let scoreTitle = document.querySelector('.scoreTitle')

let popup = document.querySelector('.popup')
let popupResult = document.getElementById('popupResult')
let popupMessage = document.getElementById('popupMessage')
let popupScore = document.getElementById('popupScore')

let replayButton = document.getElementById('replayButton')
let backtostartButton = document.getElementById('backtostartButton')

// // Game Components
// let background = document.querySelector('.background').getBoundingClientRect()

// Show/Hide Text Components - Game Play
let gameState = 'Game_Play'

// countdown.style.display = 'none'
healthScore.style.display = 'block'

popup.style.display = 'none'
popupResult.innerHTML = 'none'
popupMessage.style.display = 'none'
popupScore.style.display = 'none'

playButton.style.display = 'none'
instructionsButton.style.display = 'none'
replayButton.style.display = 'none'
backtostartButton.style.display = 'none'

player.style.display = 'block'


// Score Data
scoreTitle.innerHTML = 'Score: '
scoreValue.innerHTML = '0'
 
// let moveSpeed = 3
let player = document.getElementById('player')
let player_props = player.getBoundingClientRect()


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
    
    player.style.top=`${t}vh`
    player.style.left=`${l}vh`
 });

 function play() {
    function move() {
        // Ignore if game is not in play
        if (game_state != 'Play') return

        let obSprite = document.querySelectorAll('.obSprite')
        obSprite.forEach((element) => {
            // use obstacle & player bounding properties to evaluate
            let obSprite_props = element.getBoundingClientRect()
            player_props = player.getBoundingClientRect()

            if (obSprite_props.right <= 0) {
                // Remove obstacle sprite if it gets to the edge of the screen
                element.remove();
            } else {
                // End game if the player hits the pipes
                if (player_props.left < obSprite_props.left + obSprite_props.width && plater_props.left + player_props.width > obSprite_props.left && player_props.top < obSprite_props.top + obSprite_props.height && player_props.top + player_props.height > obSprite_props.top) {
                    // End Game
                    game_state = 'End'
                    // Send End/Restart message
                    healthScore.style.display = 'none'

                    popup.style.display = 'flex'
                    popupResult.innerHTML = 'You Crashed!'
                    popupResult.style.fontSize = '2.5rem'
                    // popupMessage.style.display = 'You sustained too much damage!'
                    popupScore.style.display = 'none'

                    playButton.style.display = 'none'
                    instructionsButton.style.display = 'none'
                    replayButton.style.display = 'block'
                    backtostartButton.style.display = 'block'

                    player.style.display = 'none'
                    return
                } else {
                    // If player keeps going, increase score
                    if (obSprite_props.right < player_props.left && obSprite_props.right + moveSpeed >= player_props.left && element.increase_score == '1'){
                        scoreValue.innerHTML =+ scoreValue.innerHTML +1
                    }
                    element.style.left = obSprite_props.left - moveSpeed + 'px'
                }
            }
        })
        requestAnimationFrame(move)
    }
    requestAnimationFrame(move)

    // Obstacle Specifics
    let ob_separation = 0
    let ob_gap = 35

    function create_obstacle(){
        if(ob_separation > 115){
            ob_separation = 0;

            // Create obstacles in 2 parts with gap at random interval
            let obPosition = Math.floor(Math.random() * 43) + 8;
            let obSprite_inv = document.createElement('div');
            obSprite_inv.className = 'obSprite';
            obSprite_inv.style.top = obPosition - 70 + 'vh';
            obSprite_inv.style.left = '100vw';

            document.body.appendChild(obSprite_inv);
            let obSprite = document.createElement('div');
            obSprite.className = 'obSprite';
            obSprite.style.top = obPosition + ob_gap + 'vh';
            obSprite.style.left = '100vw';

            // Incrrease score for every obstacle passed
            obSprite.increase_score = '1';

            // Add new obstacle sprites as game progresses
            document.body.appendChild(obSprite);
        }
        ob_separation++;
        requestAnimationFrame(create_obstacle);
    }
    requestAnimationFrame(create_obstacle);

}

// Back to Start Button -> Start Menu
backtostartButton.addEventListener('click', () => {
    // Move to Game HTML/CSS/JS
    window.location.href = "startMenu.html"
})




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





