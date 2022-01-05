let open1 = document.querySelector('#open1')
let open2 = document.querySelector('#open2')
let open3 = document.querySelector('#open3')

let openI1 = document.querySelector('#openI1')
let openI2 = document.querySelector('#openI2')
let openI3 = document.querySelector('#openI3')

let questionText1 = document.querySelector('#questionText1')
let questionText2 = document.querySelector('#questionText2')
let questionText3 = document.querySelector('#questionText3')


function showText(questionText, openI) {
    questionText.classList.add("showText")
    openI.classList.remove("fa-plus-square")
    openI.classList.add("fa-minus-square")
}

function hideText(questionText, openI) {
    questionText.classList.remove("showText");
    openI.classList.remove("fa-minus-square")
    openI.classList.add("fa-plus-square")    
}

open1.addEventListener('click', () => {
    showText(questionText1, openI1)
})

open2.addEventListener('click', () => {
    showText(questionText2, openI2)
})

open3.addEventListener('click', () => {
    showText(questionText3, openI3)
})





