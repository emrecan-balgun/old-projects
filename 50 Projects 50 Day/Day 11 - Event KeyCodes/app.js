const contain = document.querySelector('#contain')
let newKey1 = document.createElement('div')
let newKey2 = document.createElement('div')
let newKey3 = document.createElement('div')
let keyOne = document.querySelector('#keyOne')
let x = 0;

window.addEventListener('keydown' ,function (e) {
    if(!x) {
        contain.removeChild(keyOne)
        x = 1;
    }
    newKey1.classList.add('key')
    newKey1.innerHTML = `
    ${e.key}
    <small>event.key</small>
    `

    newKey2.classList.add('key')
    newKey2.innerHTML = `
    ${e.keyCode}
    <small>event.keyCode</small>
    `

    newKey3.classList.add('key')
    newKey3.innerHTML = `
    ${e.code}
    <small>event.code</small>
    `
    contain.appendChild(newKey1)
    contain.appendChild(newKey2)
    contain.appendChild(newKey3)
})