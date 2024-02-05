// Start Game
document.getElementById("start").addEventListener("click", function() {
    // Remove start button after pressed
    document.getElementById("start").style.display='none'
    
    // Road line animation
    document.getElementById("road").style.animation='roadAnimation 20s linear infinite'

    // Randomize where enemy cars appear
    //  -> every X seconds, so X000 miliseconds for this, a new car will be generated at an interval between the max and min set for each car
    setInterval(()=>{
        // num=Math.floor(Math.random()*(max-min+1)+min)
        // num=Math.floor(Math.random()*((-200)-(-300)+1)+(-300))
        num=Math.floor(Math.random()*(-200+300+1)-300)
        // Only the x-coordinates are affected
        document.getElementById("enemyCar_1").style.left=`${num}px`
    },2000)
    setInterval(()=>{
        // num=Math.floor(Math.random()*((-100)-(-200)+1)+(-100))
        num=Math.floor(Math.random()*(-100+200+1)-100)
        document.getElementById("enemyCar_2").style.left=`${num}px`
    },4000)
    setInterval(()=>{
        // num=Math.floor(Math.random()*((100)-(-100)+1)+(100))
        num=Math.floor(Math.random()*(100+100+1)+100)
        document.getElementById("enemyCar_3").style.left=`${num}px`
    },3000)
    setInterval(()=>{
        // num=Math.floor(Math.random()*((300)-(200)+1)+(200))
        num=Math.floor(Math.random()*(300-200+1)+200)
        document.getElementById("enemyCar_4").style.left=`${num}px`
    },5000)

    // Enemy car animations (give different times; match to above)
    document.getElementById("enemyCar_1").style.animation='enemyCar_1 2s linear infinite'
    document.getElementById("enemyCar_2").style.animation='enemyCar_2 4s linear infinite'
    document.getElementById("enemyCar_3").style.animation='enemyCar_3 3s linear infinite'
    document.getElementById("enemyCar_4").style.animation='enemyCar_4 5s linear infinite'

    // Position of Player Car
    //  -> Top - match to specified in CSS
    let t=15
    //   -> Left - match to specified in CSS (which is none, so 0)
    let l=0

    // Move player car w d-pad
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
        document.getElementById("playerCar").style.top=`${t}vh`
        document.getElementById("playerCar").style.left=`${l}vh`
    })

    // Set score to 0 to start
    n = 0

    // Check for collision & add to score if nah
    setInterval(() => {
        // Set score & increase as time goes on
        document.getElementById("score").innerHTML = `Score: ${n}`
        n = n + 1

        // Add bounding variables for obstacles & player (could use image for specific if available)
        // let enemyCar_1_L = Math.abs(document.getElementById("ecarimg1").getBoundingClientRect().left)
        // let enemyCar_1_L = Math.abs(document.getElementById("enemyCar_1").getBoundingClientRect().left)
        // let enemyCar_1_R = Math.abs(document.getElementById("enemyCar_1").getBoundingClientRect().right)
        // let enemyCar_1_T = Math.abs(document.getElementById("enemyCar_1").getBoundingClientRect().top)
        // let enemyCar_1_B = Math.abs(document.getElementById("enemyCar_1").getBoundingClientRect().bottom)
        let enemyCar1 = document.getElementById("enemyCar_1")
        let enemyCar1_bounds = enemyCar1.getBoundingClientRect()

        let enemyCar_2_L = Math.abs(document.getElementById("enemyCar_2").getBoundingClientRect().left)
        let enemyCar_2_R = Math.abs(document.getElementById("enemyCar_2").getBoundingClientRect().right)
        let enemyCar_2_T = Math.abs(document.getElementById("enemyCar_2").getBoundingClientRect().top)
        let enemyCar_2_B = Math.abs(document.getElementById("enemyCar_2").getBoundingClientRect().bottom)

        let enemyCar_3_L = Math.abs(document.getElementById("enemyCar_3").getBoundingClientRect().left)
        let enemyCar_3_R = Math.abs(document.getElementById("enemyCar_3").getBoundingClientRect().right)
        let enemyCar_3_T = Math.abs(document.getElementById("enemyCar_3").getBoundingClientRect().top)
        let enemyCar_3_B = Math.abs(document.getElementById("enemyCar_3").getBoundingClientRect().bottom)

        let enemyCar_4_L = Math.abs(document.getElementById("enemyCar_4").getBoundingClientRect().left)
        let enemyCar_4_R = Math.abs(document.getElementById("enemyCar_4").getBoundingClientRect().right)
        let enemyCar_4_T = Math.abs(document.getElementById("enemyCar_4").getBoundingClientRect().top)
        let enemyCar_4_B = Math.abs(document.getElementById("enemyCar_4").getBoundingClientRect().bottom)

        let playerCar_L = Math.abs(document.getElementById("playerCar").getBoundingClientRect().left)
        let playerCar_R = Math.abs(document.getElementById("playerCar").getBoundingClientRect().right)
        let playerCar_T = Math.abs(document.getElementById("playerCar").getBoundingClientRect().top)
        let playerCar_B = Math.abs(document.getElementById("playerCar").getBoundingClientRect().bottom)

        // End game if player goes out of bounds (in any direction)
        // if (playerCar_L < 460 || playerCar_R > 1130 || playerCar_T < 20 || playerCar_B > 690) {
        //     setTimeout(() => {
        //         alert(`GAME OVER!`)
        //     })
        //     location.reload()
        // }

        // Evaluate if collision occurs
        //  -> if player border is detected between enemy borders, which would consitiute an overlap / collison
        //  -> Ex below: if the player's left border is detected between enemy 1's left and right borders, that would be a crash
        //  -> Need to check conditions of all sides at once, otherwise it would expand parallel when detecting
        //      -> check each side against the two corresponding (same direction) enemy sides; ex. player's R against enemy R & L, player's B against enemy T & B, etc.
        if (((enemyCar1_bounds.left < playerCar_L && playerCar_L < enemyCar1_bounds.right) || 
        (enemyCar1_bounds.left < playerCar_R && playerCar_R < enemyCar1_bounds.right)) && 
        ((enemyCar1_bounds.top < playerCar_T && playerCar_T < enemyCar1_bounds.bottom) || 
        (enemyCar1_bounds.top < playerCar_B && playerCar_B < enemyCar1_bounds.bottom))) {
            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()
        }
        // if (((enemyCar_1_L < playerCar_L && playerCar_L < enemyCar_1_R) || (enemyCar_1_L < playerCar_R && playerCar_R < enemyCar_1_R)) && ((enemyCar_1_T < playerCar_T && playerCar_T < enemyCar_1_B) || (enemyCar_1_T < playerCar_B && playerCar_B < enemyCar_1_B))) {
        //     setTimeout(() => {
        //         alert(`GAME OVER!`)
        //     })
        //     location.reload()
        // }
        if (((enemyCar_2_L < playerCar_L && playerCar_L < enemyCar_2_L) || (enemyCar_2_L < playerCar_R && playerCar_R < enemyCar_2_R)) && ((enemyCar_2_T < playerCar_T && playerCar_T < enemyCar_2_B) || (enemyCar_2_T < playerCar_B && playerCar_B < enemyCar_2_B))) {
            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()
        }
        if (((enemyCar_3_L < playerCar_L && playerCar_L < enemyCar_3_R) || (enemyCar_3_L < playerCar_R && playerCar_R < enemyCar_3_R)) && ((enemyCar_3_T < playerCar_T && playerCar_T < enemyCar_3_B) || (enemyCar_3_T < playerCar_B && playerCar_B < enemyCar_3_B))) {
            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()
        }
        if (((enemyCar_4_L < playerCar_L && playerCar_L < enemyCar_4_R) || (enemyCar_4_L < playerCar_R && playerCar_R < enemyCar_4_R)) && ((enemyCar_4_T < playerCar_T && playerCar_T < enemyCar_4_B) || (enemyCar_4_T < playerCar_B && playerCar_B < enemyCar_4_B))) {
            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            location.reload()
        }
    }, 100)

})