// required variable definitions
const breakLength = document.getElementById('breakLength')
const sessionLength = document.getElementById('sessionLength')

const breakUp = document.getElementById('breakUp')
const breakDown = document.getElementById('breakDown')
const sessionUp = document.getElementById('sessionUp')
const sessionDown = document.getElementById('sessionDown')

const caseName = document.getElementById('caseName')
const counter = document.getElementById('counter')

const play = document.getElementById('play')
const pause = document.getElementById('pause')
const reset = document.getElementById('reset')

// main case
breakLength.innerHTML = 1;
sessionLength.innerHTML = 1;
caseName.innerHTML = "Session";
counter.innerHTML = "02:00";

// Functions
function down(elementName) {
    let newValue = Number(elementName.innerHTML) - Number(1);
    if(elementName.innerHTML == 120) {
        // console.log("sinira ulasti")
    } else {
        if(newValue < 10) {
            elementName.innerHTML = newValue;
            counter.innerHTML = `0${newValue}:00`;
        } else {
            elementName.innerHTML = newValue;
            counter.innerHTML = `${newValue}:00`;
        }
    }
}

function up(elementName) {
    let newValue = Number(elementName.innerHTML) + Number(1);
    elementName.innerHTML = newValue;
    if(newValue < 10) {
        elementName.innerHTML = newValue;
        counter.innerHTML = `0${newValue}:00`;
    } else {
        elementName.innerHTML = newValue;
        counter.innerHTML = `${newValue}:00`;
    }
}

// Button actions

breakDown.addEventListener('click', () => {
    down(breakLength);
})

breakUp.addEventListener('click', () => {
    up(breakLength);
})

sessionDown.addEventListener('click', () => {
    down(sessionLength);
})

sessionUp.addEventListener('click', () => {
    up(sessionLength);
})


let timeSecond = sessionLength.innerHTML

displayTime(timeSecond)

const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <=0 || timeSecond < 1) {
        endTime();
        clearInterval(countDown);
    }
},1000)

function displayTime(second) {
    console.log(second)
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    counter.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}

function endTime() {
    counter.innerHTML = "TIME OUT";
}


play.addEventListener('click', () => {
    
})

pause.addEventListener('click', () => {
   
})

reset.addEventListener('click', () => {
    
})
