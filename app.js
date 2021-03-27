document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDislay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    timeLeft = 10

    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0){
                clearInterval(timeLeft = 0)
            }
            timeLeftDislay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    }

    startBtn.addEventListener('click', countDown)
})