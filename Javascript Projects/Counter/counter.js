const btnContainer = document.querySelector('#btnContainer')
const counterTitle = document.querySelector('#counterTitle')
const counterText = document.querySelector('#counterText')
let counterValue = 0;

function createButton (id) {
    let btn = document.createElement("button")
    btn.setAttribute("id",`${id}`);
    btn.classList.add("btn", "btn-outline-dark", "mt-4", "ms-3", "px-3", "py-2")
    btn.innerHTML = `${id.toUpperCase()}`;
    btnContainer.appendChild(btn);
}

counterTitle.classList.add("display-1", "mb-2")
counterTitle.innerHTML = "Counter"

counterText.classList.add("display-4")
counterText.innerHTML = counterValue

createButton("increase")
createButton("reset")
createButton("decrease")

let increaseButton = document.querySelector('#increase')
let decreaseButton = document.querySelector('#decrease')
let resetButton = document.querySelector('#reset')

increaseButton.addEventListener('click', () => {
    counterValue += 1;
    counterText.innerHTML = counterValue
    if(counterValue > 0) {
        counterText.style.color = "Green";
    }
})

decreaseButton.addEventListener('click', () => {
    counterValue -= 1;
    counterText.innerHTML = counterValue
    if(counterValue < 0 || counterValue == -1) {
        counterText.style.color = "Red";
    }
})
resetButton.addEventListener('click', () => {
    counterValue = 0;
    counterText.innerHTML = counterValue
    counterText.style.color = "Black"
})
