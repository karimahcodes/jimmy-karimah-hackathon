
let countdownTimer = null;

function startCountdown() {
    let countdownInput = document.querySelector('#countdownInput');
    let countdownTime = parseInt(countdownInput.value);
    let countdownDisplay = document.querySelector('#countdownDisplay');
    
    if (isNaN(countdownTime) || countdownTime < 1) {
        alert('Enter a valid time');
        return;
    }
    
    countdownTimer = setInterval(function() {
        if (countdownTime <= 0) {
            clearInterval(countdownTimer);
            timeUp();
        } else {
            countdownDisplay.innerText = `Time left: ${countdownTime} seconds`;
            countdownTime--
        }
    }, 1000);
}

function timeUp() {
    console.log("Play a song");
}

