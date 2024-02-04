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
    document.getElementById("enemyCar_1").style.animation='enemyCar_1Anim 2s linear infinite'
    document.getElementById("enemyCar_2").style.animation='enemyCar_2Anim 4s linear infinite'
    document.getElementById("enemyCar_3").style.animation='enemyCar_3Anim 3s linear infinite'
    document.getElementById("enemyCar_4").style.animation='enemyCar_4Anim 5s linear infinite'

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
    });

})