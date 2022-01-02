const text = document.querySelector('.text')
const bgPhoto = document.querySelector('.bgPhoto')
let counter = 0;
let counter2 = 25;


window.onload = function () {
    text.innerHTML = `${counter}%`
    text.style.opacity = 1;
    bgPhoto.style.filter = "blur(30px)"
    counter = setInterval(loader,25);
}

function loader() {
    if(counter >= 100) {
        clearInterval(counter);
    } else {
        counter ++;
        text.innerHTML = `${counter}%`;
        text.style.opacity -= 0.01;
        counter2 -= 0.30;
        bgPhoto.style.filter = `blur(${counter2}px)`
    }
}


