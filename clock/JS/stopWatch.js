const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const stopwatch = document.getElementById('stopwatch');

let stopwatchTime;
let stopwatchInterval;

resetStopwatch();

function startStopwatch() {
    if(startPauseBtn.innerText == 'Start') {
        startPauseBtn.innerText = 'Pause';
        stopwatchInterval = setInterval(countStopwatch, 1000);
    } else if(startPauseBtn.innerText == 'Pause') {
        startPauseBtn.innerText = 'Start';
        clearInterval(stopwatchInterval);
    }
}

function countStopwatch() {
    stopwatchTime++;
    let hours = Math.floor((stopwatchTime / 3600));
    let minutes = Math.floor((stopwatchTime - (hours * 3600)) / 60);
    let seconds = Math.floor((stopwatchTime - (hours * 3600) - (minutes * 60)));
    let time = hours.toString().padStart(2,'0') + ':' + minutes.toString().padStart(2,'0') + ':' + seconds.toString().padStart(2,'0');
    stopwatch.innerText = time;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopwatch.innerText = '00:00:00';
    startPauseBtn.innerText = 'Start';
    stopwatchTime = 0;
    if(stopwatchInterval) {
        stopStopwatch();
    }
}