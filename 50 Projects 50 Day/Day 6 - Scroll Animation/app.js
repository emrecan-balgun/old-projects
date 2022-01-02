const allBoxes = document.querySelectorAll('.box')

window.addEventListener('scroll', scrollBoxes)

scrollBoxes()

function scrollBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    allBoxes.forEach(element => {
        const boxTop = element.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    })
}