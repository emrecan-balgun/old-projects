const body = document.querySelector('body')
body.setAttribute('style','background-image: url(./assets/background.jpg)')

const cardTitle = document.querySelector('#cardTitle')
const openButton = document.querySelector('#open')
const closeButton = document.querySelector('#close')
const modalContainer = document.querySelector('#modalContainer')
const modalTitle = document.querySelector('#modalTitle')
const modalText = document.querySelector('#modalText')

modalText.classList.add("mt-3")
openButton.classList.add('mt-4')
closeButton.classList.add("mt-2")
cardTitle.classList.add('display-2')

cardTitle.innerHTML = "MODAL PROJECT"
openButton.innerHTML = "OPEN MODAL"
closeButton.innerHTML = "Close me"
modalTitle.innerHTML = "Modal Contain"
modalText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, possimus magnam excepturi repudiandae, animi ipsam rem autem cum maiores consectetur enim asperiores nisi! Molestias, suscipit."

openButton.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

closeButton.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});