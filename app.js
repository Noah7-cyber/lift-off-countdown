let secounds= document.getElementById('secounds')
let minutes = document.getElementById('minutes')
console.log(minutes);
let hours = document.getElementById('hours')
let days = document.getElementById('days')

const countDown = () => {
    setInterval(() => {
        secounds.innerHTML -= 1
     if (secounds.innerHTML < 0) {
        minutes.innerHTML -= 1;
            secounds.innerHTML = 60;
        }
        if (minutes.innerHTML <= 0) {
            hours.innerHTML -= 1
            minutes.innerHTML = 60
        }
        if (hours.innerHTML <= 0) {
            days.innerHTML -=1;
            hours.innerHTML = 24;
        }
        if (
            (secounds.innerHTML == 0)&&
            (minutes.innerHTML == 0) &&
            (hours.innerHTML == 0) &&
            (days.innerHTML == 0)
        ) {
            document.querySelector('h1').innerText = 'TIMER COMPLETED';
        }
    }, 1000);
}
countDown();