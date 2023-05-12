let songList = [
    'https://www.youtube.com/embed/wxAZfLenfa0?list=RDwxAZfLenfa0',
    'https://www.youtube.com/embed/b6Qp25T48GE?list=RDb6Qp25T48GE'];

let countdownTimer = null;

function startCountdown() {
    let countdownInput = document.querySelector('#countdownInput');
    let countdownTime = parseInt(countdownInput.value);
    let countdownTimeStart = parseInt(countdownInput.value);
    let progress = 1;

    
    let countdownDisplay = document.querySelector('#countdownDisplay');
    
    if (isNaN(countdownTime) || countdownTime < 1) {
        alert('Enter a valid time');
        return;
    }
    
    countdownTimer = setInterval(function() {
        if (countdownTime <= 0) {
            clearInterval(countdownTimer);
            timeUp();
            selectVideo();
        } else {
            countdownDisplay.innerText = `Time left: ${countdownTime} seconds`;
            countdownTime--
            progress = countdownTimer/countdownTimeStart;
            let candle = document.querySelector('candle');
            candle.setAttribute('height', `${progress}%`)
        }
    }, 1000);
}

function timeUp() {
    console.log("Play a song");
}

function selectVideo() {
    window.open(songList[Math.floor(Math.random(songList.length))], '_blank');
}

const form = document.querySelector('#form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    songList.push(event.target[0].value)
})


axios
    .get(`https://api.thecatapi.com/v1/images/search?limit=10
    `).then(response => {
        let info = response.data;
        console.log(info);
        let picContainer = document.querySelector('.catpic');
        let image = document.createElement('img');
        image.src = info[0].url;
        picContainer.appendChild(image);
        console.log(info[0].url)
    })