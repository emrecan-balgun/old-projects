function generateRandomNumber() {
    return Math.floor(Math.random() * colorName.length);
}

function changeColor() {
    let randomColor = colorName[generateRandomNumber()]

    spanText.innerHTML = `Background color: ${randomColor}`
    document.body.style.backgroundColor = randomColor;
}

const colorName = ["Red", "Blue", "Green", "Yellow", "Pink", "Purple", "Aqua", "Gray", "Orange"]
const btnContainer = document.getElementById('btnContainer');
const spanText = document.querySelector('#spanText')

let btn = document.createElement("button")
btn.classList.add("btn", "btn-outline-dark", "mt-5", "px-3", "py-3")
btn.setAttribute("id", "btn")
btn.innerHTML = "CLICK ME";
btnContainer.appendChild(btn);

spanText.classList.add("bg-dark", "text-white", "display-3", "px-3", "py-3")
spanText.innerHTML = `Background color: White`

btn.addEventListener('click', changeColor)