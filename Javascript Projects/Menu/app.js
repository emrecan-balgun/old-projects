const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const menuContainer = document.getElementById('menuContainer')

const all = document.querySelector('#all')
const breakfast = document.querySelector('#breakfast')
const lunch = document.querySelector('#lunch')
const shakes = document.querySelector('#shakes')
const dinner = document.querySelector('#dinner')

function showInfo(categoryName) {
  let categoryAdi = "#" + categoryName;
  let otherDivs = document.querySelectorAll('.menu-items')

    for(let i=0; i<otherDivs.length; i++) {
        otherDivs[i].style.display = "none";
    }

    let myDiv = document.querySelectorAll(categoryAdi)

    for(let j=0; j<myDiv.length; j++) {
      myDiv[j].style.display = "flex"
    }
}

all.addEventListener('click', () => {
  getItems(menu);
})

breakfast.addEventListener('click', () => {
  showInfo("breakfast")
})

lunch.addEventListener('click', () => {
  showInfo("lunch")
})

shakes.addEventListener('click', () => {
  showInfo("shakes")
})

dinner.addEventListener('click', () => {
  showInfo("dinner")
})


function getItems(items) {
  menuContainer.innerHTML = '';
  items.map((item) => {
    let menuItems = document.createElement("div")
    menuItems.classList.add("menu-items", "col-lg-6", "col-sm-12")
    menuItems.setAttribute('id',`${item.category}`)
    menuItems.innerHTML = `<img src="${item.img}" class="photo">`
    menuContainer.appendChild(menuItems)

    let menuInfo = document.createElement("div")
    menuInfo.classList.add("menu-info")

    let menuTitle = document.createElement("div")
    menuTitle.classList.add("menu-title")

    let menuText = document.createElement("div")
    menuText.classList.add("menu-text")

    let menuTitleText = document.createElement("h4")
    menuTitleText.innerHTML = `${item.title}`

    let menuTitlePrice = document.createElement("h4")
    menuTitlePrice.classList.add("price")
    menuTitlePrice.innerHTML = `${item.price}`

    menuText.innerHTML = `${item.desc}`

    menuTitle.appendChild(menuTitleText)
    menuTitle.appendChild(menuTitlePrice)

    menuItems.appendChild(menuInfo)
    menuInfo.appendChild(menuTitle)
    menuInfo.appendChild(menuText)
  });
}

getItems(menu);