const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const progressBar = document.querySelector('#progress')
let counter = document.querySelectorAll('span');
// console.log(counter)
let counterBar = 0; // counterBar == progressBar
let counterStage = 1; // number of stages (starts with the first number)

nextButton.disabled = false;
prevButton.disabled = true;

nextButton.addEventListener('click', () => {
    if(counterBar<99.99)
    {
        prevButton.disabled = false;
        counterBar += 33.33;
        progressBar.style.width = `${counterBar}%`;
        counter[counterStage].classList.add('border-primary');
        counterStage += 1;
        if(counterBar>=99.99)
        {
            nextButton.disabled = true;
        }
    }  
})

prevButton.addEventListener('click', () => {
    if(counterBar>=33.33) {
        counterBar -= 33.33;
        progressBar.style.width = `${counterBar}%`;
        counterStage -= 1;
        counter[counterStage].classList.remove('border-primary');
        if(counterBar>=33.33) {
            nextButton.disabled = false;
        } else {
            prevButton.disabled = true;
        }
    }
})