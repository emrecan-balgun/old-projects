const joke = document.querySelector('#joke')
const btn = document.querySelector('#getData')

const config = {
    headers: {
        Accept: 'application/json',
    },
}

function generateJoke() {
    fetch('https://icanhazdadjoke.com', config).then(function(response){
        response.json().then(function(data) {
            joke.innerHTML = data.joke
        });
        }).catch(function(error) {
            console.log('Fetch Error:', error);
        });
}

btn.addEventListener('click', () => {
    generateJoke();
})

generateJoke();