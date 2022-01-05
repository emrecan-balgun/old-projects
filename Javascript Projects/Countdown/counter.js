const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const mins = document.querySelector('#mins')
const secs = document.querySelector('#secs')

const countDownDate = new Date("Aug 29, 2023 11:30:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = day < 10 ? "0" + day : day;
    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    mins.innerHTML = minute < 10 ? "0" + minute : minute;
    secs.innerHTML = second < 10 ? "0" + second : second;    

    if(distance < 0) {
        clearInterval(x);
        const contain = document.querySelectorAll('#contain')
        let expired = document.createElement('h1')
        expired.classList.add('display-5')
        expired.innerHTML = "EXPIRED"
        contain.appendChild(expired)
    }
}, 1000);