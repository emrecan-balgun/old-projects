const search = document.querySelector('#search')
const input = document.querySelector('#searchInput')
let clicked = false;

search.addEventListener('click', () => {
    if(clicked != true) {
        input.style.display = "block";
        // input.focus();
        clicked = true;
    } else {
        input.style.display = "none";
        clicked = false;
    }
})