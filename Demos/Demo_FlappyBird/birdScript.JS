// Tutorial: https://www.youtube.com/watch?v=Ltg1fl4Obgg

// Bird Variables
let moveSpeed = 3, gravity = 0.5
let bird = document.querySelector('.bird')
// let img = document.getElementById('bird1')

// Get bird's element properties
let bird_props = bird.getBoundingClientRect()

//  -> get DOMReact for background to use (top, right, bottom, left), (x & y), (width & height)
let background = document.querySelector('.background').getBoundingClientRect()


// Other Variables
let scoreValue = document.querySelector('.scoreValue')
let message = document.querySelector('.message')
let scoreTitle = document.querySelector('.scoreTitle')


// Start Display
let game_state = 'Start'
// img.style.display = 'none'
bird.style.display = 'none'
message.classList.add('messageStyle')

// Start Game
document.addEventListener('keydown', (e) => {
    // Start game if enter key is pressed
    if (e.key == 'Enter' && game_state != 'Play') {
        // If game is not in play, remove any/all pipe sprites
        document.querySelectorAll('.pipeSprite').forEach((e) => {
            e.remove()
        })
        // Bird appears
        // img.style.display = 'block'
        bird.style.display = 'block'
        bird.style.top = '40vh'
    
        // Change Game State
        game_state = 'Play'
    
        // Score Data
        scoreTitle.innerHTML = 'Score: '
        scoreValue.innerHTML = '0'

        // Get rid of message
        message.innerHTML = ''
        message.classList.remove('messageStyle')

        play()
    }
})

function play() {
    function move() {
        // Ignore if game is not in play
        if (game_state != 'Play') return

        let pipeSprite = document.querySelectorAll('.pipeSprite')
        pipeSprite.forEach((element) => {
            // use pipe & bird bounding properties to evaluate
            let pipeSprite_props = element.getBoundingClientRect()
            bird_props = bird.getBoundingClientRect()

            if (pipeSprite_props.right <= 0) {
                // Remove pipe sprite if it gets to the edge of the screen
                element.remove();
            } else {
                // End game if the bird hits the pipes
                if (bird_props.left < pipeSprite_props.left + pipeSprite_props.width && bird_props.left + bird_props.width > pipeSprite_props.left && bird_props.top < pipeSprite_props.top + pipeSprite_props.height && bird_props.top + bird_props.height > pipeSprite_props.top) {
                    // End Game
                    game_state = 'End'
                    // Send End/Restart message
                    message.innerHTML = 'Game Over'.fontcolor('red') + '<br>Press Enter to Restart'
                    message.classList.add('messageStyle')

                    // Remove bird
                    // img.style.display = 'none'
                    bird.style.display = 'none'
                    return
                } else {
                    // If player keeps going, increase score
                    if (pipeSprite_props.right < bird_props.left && pipeSprite_props.right + moveSpeed >= bird_props.left && element.increase_score == '1'){
                        scoreValue.innerHTML =+ scoreValue.innerHTML +1
                    }
                    element.style.left = pipeSprite_props.left - moveSpeed + 'px'
                }
            }
        })
        requestAnimationFrame(move)
    }
    requestAnimationFrame(move)

    let bird_dy = 0;
    function applyGravity() {
        // Ignore if game is not in play
        if (game_state != 'Play') return

        // Change image & apply gravity when up arrow is pressed
        bird_dy = bird_dy + gravity
        document.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowUp' || e.key == ''){
                // Switch image to show use
                // img.src = 'images/bird2.png'
                bird.style.backgroundColor = 'coral'
                bird_dy = -7.6;
            }
        })
        
        // Change image back when up arrow is released
        document.addEventListener('keyup', (e) => {
            if (e.key == 'ArrowUp' || e.key == '') {
                // img.src = 'images/bird.png'
                bird.style.backgroundColor = 'red'
            }
        })

        // End game if bird hits ground
        if(bird_props.top <= 0 || bird_props.bottom >= background.bottom) {
            game_state = 'End'
            message.style.left = '28vw'
            window.location.reload()
            message.classList.remove('messageStyle')
            return
        }
        bird.style.top = bird_props.top + bird_dy + 'px'
        bird_props = bird.getBoundingClientRect()
        requestAnimationFrame(applyGravity)
    }
    requestAnimationFrame(applyGravity)

    // Pipe Specifics
    let pipe_separation = 0
    let pipe_gap = 35

    function create_pipe(){
        // Skip if game is not in play
        if(game_state != 'Play') return;

        if(pipe_separation > 115){
            pipe_separation = 0;

            // Create pipes in 2 parts with gap at random interval
            let pipePosition = Math.floor(Math.random() * 43) + 8;
            let pipeSprite_inv = document.createElement('div');
            pipeSprite_inv.className = 'pipeSprite';
            pipeSprite_inv.style.top = pipePosition - 70 + 'vh';
            pipeSprite_inv.style.left = '100vw';

            document.body.appendChild(pipeSprite_inv);
            let pipeSprite = document.createElement('div');
            pipeSprite.className = 'pipeSprite';
            pipeSprite.style.top = pipePosition + pipe_gap + 'vh';
            pipeSprite.style.left = '100vw';

            // Incrrease score for every pope passed
            pipeSprite.increase_score = '1';

            // Add new pipe sprites as game progresses
            document.body.appendChild(pipeSprite);
        }
        pipe_separation++;
        requestAnimationFrame(create_pipe);
    }
    requestAnimationFrame(create_pipe);

}

