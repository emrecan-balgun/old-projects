const jokes = document.querySelector('#jokes')
const makeJoke = document.querySelector('#makeJoke')
const chuckMorris = document.querySelector('#chuckMorris')

makeJoke.addEventListener('click', () => {  
    // get api content
    fetch('https://api.icndb.com/jokes/random?escape=javascript').then(function(response){
        response.json().then(function(data) {
            chuckMorris.classList.add('shakeImg')
            setTimeout(function() {
                chuckMorris.classList.remove('shakeImg')
            },500);
            jokes.innerHTML = data.value.joke
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
})



