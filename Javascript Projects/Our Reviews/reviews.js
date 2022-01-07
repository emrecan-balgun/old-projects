const persons = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

let counter = 0

const titleDOM = document.querySelector('#title')
titleDOM.classList.add("display-3")
titleDOM.innerHTML = "Our Reviews"

const hrTagDOM = document.querySelector('#hrTag')
let hrTag = document.createElement('div')
hrTag.classList.add("underline","mt-2")
hrTagDOM.appendChild(hrTag)

const mainDOM = document.querySelector('#main')
mainDOM.classList.add("newCard", "mt-5")

let imgContainer = document.createElement('div')
imgContainer.classList.add("img-container")

let avatar = document.createElement('img')
avatar.setAttribute('id','person-img')
imgContainer.appendChild(avatar)

let author = document.createElement('h4')
author.setAttribute('id','author')

let job = document.createElement('p')
job.setAttribute('id', 'job')

let info = document.createElement('p')
info.setAttribute('id', 'info')

function personShow(counter) {
    console.log(counter)
    avatar.setAttribute('src',`${persons[counter].img}`)
    author.innerHTML = `${persons[counter].name.toUpperCase()}`
    job.innerHTML = `${persons[counter].job.toUpperCase()}`
    info.innerHTML = `${persons[counter].text}`
}

personShow(0);

let buttonContainer = document.createElement('div')
buttonContainer.classList.add('button-container')

let prevBtn = document.createElement('button')
prevBtn.classList.add("prev-btn")
prevBtn.innerHTML = "<"
prevBtn.addEventListener('click', () => {
    if(counter == 0) {
        counter = persons.length - 1;
        personShow(counter);
    } else {
        counter -= 1
        personShow(counter)
    }
})

let nextBtn = document.createElement('button')
nextBtn.classList.add("prev-btn")
nextBtn.innerHTML = ">"
nextBtn.addEventListener('click', () => {
    if(counter == persons.length -1) {
        counter = 0;
        personShow(counter);
    } else {
        counter += 1
        personShow(counter)
    }
})

let randomBtn = document.createElement('button')
randomBtn.classList.add("random-btn")
randomBtn.innerHTML = "Surprise Me"
randomBtn.addEventListener('click', () => {
    let personLength = persons.length;
    let randomNumber = Math.floor(Math.random() * personLength);
    personShow(randomNumber)
})

buttonContainer.appendChild(prevBtn)
buttonContainer.appendChild(nextBtn)

mainDOM.appendChild(imgContainer)
mainDOM.appendChild(author)
mainDOM.appendChild(job)
mainDOM.appendChild(info)
mainDOM.appendChild(buttonContainer)
mainDOM.appendChild(randomBtn)

