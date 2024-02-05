// Player Variables & Properties
let moveSpeed = 3, gravity = 0.5
let player = document.querySelector('.player')
let player_prop = player.getBoundingClientRect()

//  -> get DOMReact for background to use (top, right, bottom, left), (x & y), (width & height)
let background = document.querySelector('.background').getBoundingClientRect()

// Define Text Components
let scoreValue = document.querySelector('.scoreValue')
let popup = document.querySelector('.popup')


// Start Display
let game_state = 'Start'
// player.style.display = 'none'
popup.classList.add('popupStyle')

// Start Game
document.addEventListener('keydown', (e) => {
    // Start game if enter key is pressed
    if (e.key == 'Enter' && game_state != 'Play') {
        // If game is not in play, remove any/all pipe sprites
        document.querySelectorAll('.obstacle').forEach((e) => {
            e.remove()
        })
        // Player appears
        // player.style.display = 'block'
        // player.style.top = '40vh'
    
        // Change Game State
        game_state = 'Play'
    
        // Score Data
        scoreValue.innerHTML = '0'

        // Get rid of popup
        popup.innerHTML = ''
        popup.classList.remove('popupStyle')

        play()
    }
})

function play() {
    function move() {
        // Ignore if game is not in play
        if (game_state != 'Play') return

        let obstacle = document.querySelectorAll('.obstacle')
        obstacle.forEach((element) => {
            // use bounding properties to evaluate
            let obstacle_prop = element.getBoundingClientRect()
            player_prop = player.getBoundingClientRect()

            if (obstacle_prop.right <= 0) {
                // Remove obstacle if it gets to the edge of the screen
                element.remove();
            } else {
                // End game if obstacle hit
                if (player_prop.left < obstacle_prop.left + obstacle_prop.width && player_prop.left + player_prop.width > obstacle_prop.left && player_prop.top < obstacle_prop.top + obstacle_prop.height && player_prop.top + player_prop.height > obstacle_prop.top) {
                    // End Game
                    game_state = 'End'
                    // Send End/Restart popup
                    popup.innerHTML = 'Game Over'.color('gold') + '<br>Press Enter to Restart'
                    popup.classList.add('popup')

                    // Remove player
                    // img.style.display = 'none'
                    // player.style.display = 'none'
                    return
                } else {
                    // If player keeps going, increase score
                    if (obstacle_prop.right < player_prop.left && obstacle_prop.right + moveSpeed >= player_prop.left && element.increase_score == '1'){
                        scoreValue.innerHTML =+ scoreValue.innerHTML +1
                    }
                    element.style.left = obstacle_prop.left - moveSpeed + 'px'
                }
            }
        })
        requestAnimationFrame(move)
    }
    requestAnimationFrame(move)

    // Move Player
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

    // let player_move = 0;
    // function applyGravity() {
    //     // Ignore if game is not in play
    //     if (game_state != 'Play') return

    //     // Change image & apply gravity when up arrow is pressed
    //     player_move = player_move + gravity
    //     document.addEventListener('keydown', (e) => {
    //         if (e.key == 'ArrowUp' || e.key == ''){
    //             // Switch color to show use
    //             player.style.backgroundColor = 'coral'
    //             player_move = -7.6;
    //         }
    //     })
        
    //     // Change image back when up arrow is released
    //     document.addEventListener('keyup', (e) => {
    //         if (e.key == 'ArrowUp' || e.key == '') {
    //             // Switch color to show use
    //             player.style.backgroundColor = 'aqua'
    //         }
    //     })

    //     // End game if player hits ground
    //     if(player_prop.top <= 0 || player_prop.bottom >= background.bottom) {
    //         game_state = 'End'
    //         popup.style.left = '28vw'
    //         window.location.reload()
    //         popup.classList.remove('popupStyle')
    //         return
    //     }
    //     player.style.top = player_prop.top + player_move + 'px'
    //     player_prop = play.getBoundingClientRect()
    //     requestAnimationFrame(applyGravity)
    // }
    // requestAnimationFrame(applyGravity)

    // Obstacle Generation
    let obstacle_spacing = 0
    let obstacle_window = 35

    function create_obstacle(){
        // Skip if game is not in play
        if(game_state != 'Play') return;

        if(obstacle_spacing > 115){
            obstacle_spacing = 0;

            // Create obstacles in 2 parts with window at random interval
            let obstaclePosition = Math.floor(Math.random() * 43) + 8;
            let obstacleInv = document.createElement('div');
            obstacleInv.className = 'obstacle';
            obstacleInv.style.top = obstaclePosition - 70 + 'vh';
            obstacleInv.style.left = '100vw';

            document.body.appendChild(obstacleInv);
            let obstacle = document.createElement('div');
            obstacle.className = 'obstacle';
            obstacle.style.top = obstacle_spacing + obstacle_window + 'vh';
            obstacle.style.left = '100vw';

            // Incrrease score for every obstacle passed
            obstacle.increase_score = '1';

            // Add new obstacles as game progresses
            document.body.appendChild(obstacle);
        }
        obstacle_spacing++;
        requestAnimationFrame(create_obstacle);
    }
    requestAnimationFrame(create_obstacle);

}





