const titleAttr = document.querySelector('#titleText')
titleAttr.innerHTML = `${titleAttr.innerHTML.toUpperCase()}`
titleAttr.classList.add('mt-5')

const numOfParagraph = document.querySelector('#numOfParagraph')

const generateButton = document.querySelector('#generateButton')
generateButton.innerHTML = `${generateButton.innerHTML.toUpperCase()}`
generateButton.classList.add('px-3')

const loremParagraphs = document.querySelector('#loremParagraphs')