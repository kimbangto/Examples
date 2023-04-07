let timer = document.getElementById('timer')
let inputTimer = document.getElementById('inputTimer');

function countdown() {
    inputTimer.classList.add('hidden');
    timer.classList.remove('hidden');
    let hour = document.getElementById('hour').value;
    let minute = document.getElementById('minute').value;
    let second = document.getElementById('second').value;
    let timeLeft = (hour * 3600) + (minute * 60) + (second * 1);
    let countdownTimer = setInterval(function() {
        let hours = Math.floor((timeLeft / 3600));
        let minutes = Math.floor((timeLeft - (hours * 3600)) / 60);
        let seconds = Math.floor((timeLeft - (hours * 3600) - (minutes * 60)));
        let time = hours.toString().padStart(2,'0') + ':' + minutes.toString().padStart(2,'0') + ':' + seconds.toString().padStart(2,'0');
        document.getElementById('timer').innerHTML = time;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            alert("집에 가자!");
            timer.classList.add('hidden');
            inputTimer.classList.remove('hidden');
        }
    }, 1000);
}