const searchText = document.querySelector('#searchText')
const searchButton = document.querySelector('#searchButton')

function showCocktail(cocktailName) {
    let cocktails = "#" + cocktailName.toUpperCase();

    let otherDivs = document.querySelectorAll('.selectCocktail')
    for(let i=0; i<otherDivs.length; i++) {
        otherDivs[i].style.display = "none";
    }

    let myDiv = document.querySelector(cocktails)
    myDiv.style.display = "block"
}

searchButton.addEventListener('click', () => {
    if(searchText.value != "") {
        showCocktail(searchText.value)
    } else {
        let otherDivs = document.querySelectorAll('.selectCocktail')
        for(let i=0; i<otherDivs.length; i++) {
            otherDivs[i].style.display = "block";
        }
    }
});
