const openBtn = document.querySelector('#open')
const closeBtn = document.querySelector('#close')
const fullPageContainer = document.querySelector('.fullPageContainer')

openBtn.addEventListener('click', () => {
    fullPageContainer.classList.add('show-nav')
});

closeBtn.addEventListener('click', () => {
    fullPageContainer.classList.remove('show-nav')
});