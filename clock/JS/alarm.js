
let getAlarm;
let compareInterval;
const alarmMessage = document.getElementById('alarmMessage');

function setAlarm() {
    getAlarm = document.getElementById('alarmHour').value; // String
    alarmMessage.innerText = `${getAlarm}에 알람이 설정되었습니다.`;
    compareInterval = setInterval(compareTime, 1000);
    document.getElementById('inputAlarm').classList.add('hidden');
}

function compareTime() {
    const date = new Date();
    const hour = date.getHours().toString().padStart(2,'0');
    const minute = date.getMinutes().toString().padStart(2,'0');
    const now = `${hour}:${minute}`;
    if(now == getAlarm) {
        getAlarm = 0;
        clearInterval(compareInterval);
        console.log('마자용');
    }
}