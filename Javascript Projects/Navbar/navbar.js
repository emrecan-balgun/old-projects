const container = document.querySelector('#navbar')
const navbarDOM = document.createElement('div')
navbarDOM.setAttribute('id', 'navbar')
navbarDOM.classList.add("bg-white", "row", "text-center", "py-3")
navbarDOM.setAttribute('style','width: 100%;')

container.appendChild(navbarDOM)

for(let i=0; i<3; i++) {
    let col4 = document.createElement('div')
    col4.classList.add('col-4')
    col4.setAttribute('id',`col${i+1}`)
    navbarDOM.appendChild(col4)
}

let col1DOM = document.querySelector('#col1')
let col2DOM = document.querySelector('#col2')
let col3DOM = document.querySelector('#col3')

let logo = document.createElement('img')
logo.setAttribute('src', 'https://vanilla-js-basic-project-4-navbar.netlify.app/logo.svg')
logo.classList.add('logo')

col1DOM.appendChild(logo)

let linkList = document.createElement('ul')
let listItems = ["home", "about", "projects", "contact"]

for(let i=0; i<listItems.length; i++) {
    let newListItem = document.createElement('li')
    newListItem.classList.add("ms-5", "mt-2")

    let aListItem = document.createElement('a')
    aListItem.setAttribute('href', `${listItems[i]}.html`)
    aListItem.classList.add('text-decoration-none')
    aListItem.innerHTML = listItems[i].toUpperCase()

    newListItem.appendChild(aListItem)
    linkList.appendChild(newListItem)
}

col2DOM.appendChild(linkList)

let socialMediaList = document.createElement('ul')
let socialMediaItems = ["facebook", "twitter", "behance", "linkedin", "sketch"]

for(let j=0; j<socialMediaItems.length; j++) {
    let newListItem = document.createElement('li')
    newListItem.classList.add("ms-3", "mt-2")

    let aListItem = document.createElement('a')
    aListItem.setAttribute('href', `https://www.${socialMediaItems[j]}.com`)
    aListItem.setAttribute('style', 'color: #49a6e9;')
    aListItem.classList.add('text-decoration-none')

    let iListItem = document.createElement('i')
    iListItem.classList.add("fab", `fa-${socialMediaItems[j]}`)

    aListItem.appendChild(iListItem)
    newListItem.appendChild(aListItem)
    socialMediaList.appendChild(newListItem)
}

col3DOM.appendChild(socialMediaList)