const nowDate = document.querySelector('#date');
const clock = document.querySelector('#clock');

function getNowDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth()+1).toString().padStart(2, '0'); // 1월 => 0이기 때문에 +1 해줌
    const date = today.getDate().toString().padStart(2, '0'); // 날짜
    const day = today.getDay(); // 요일 / 0 => 일요일 1 => 월요일 ...

    nowDate.innerText = (`${year}. ${month}. ${date}.`);
}

function getClock() {
    const today = new Date();
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');

    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getNowDate();
getClock();
setInterval(getClock, 1000);
setInterval(getNowDate, 1000);