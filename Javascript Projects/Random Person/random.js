const randomUserButton = document.querySelector('#randomUser')

const userImg = document.querySelector('#userImg')
const userValue = document.querySelector('#userValue')
const userTitle = document.querySelector('#userTitle')

const userName = document.querySelector('#userName')
const userEmail = document.querySelector('#userEmail')
const userAge = document.querySelector('#userAge')
const userLocation = document.querySelector('#userLocation')
const userPhone = document.querySelector('#userPhone')
const userPassword = document.querySelector('#userPassword')

function deleteActive() {
    document.getElementById("iconName").style.color = "hsl(210, 22%, 49%)";
    document.getElementById("iconEmail").style.color = "hsl(210, 22%, 49%)";
    document.getElementById("iconLocation").style.color = "hsl(210, 22%, 49%)";
    document.getElementById("iconPhone").style.color = "hsl(210, 22%, 49%)";
    document.getElementById("iconPassword").style.color = "hsl(210, 22%, 49%)";
    document.getElementById("iconAge").style.color = "hsl(210, 22%, 49%)";
};

function generateRandomUser() {
// get api content
fetch('https://randomuser.me/api/').then(function(response){
    response.json().then(function(data) {
        // console.log(data);
        let email = data.results[0].email
        let name = data.results[0].name.first + " " + data.results[0].name.last
        let age = data.results[0].dob.age
        let location = data.results[0].location.postcode + " " + data.results[0].location.city + " " + data.results[0].location.country
        let phone = data.results[0].phone
        let photo = data.results[0].picture.large
        let password = data.results[0].login.password

        userImg.setAttribute('src', photo)
        userTitle.innerHTML = "My name is";
        userValue.innerHTML = name;

        // userName button clicked
        userName.addEventListener('click', () => {
            deleteActive();
            document.getElementById("iconName").style.color = "#49a6e9";
            userTitle.innerHTML = "My name is"
            userValue.innerHTML = name;
        })
        // userEmail button clicked
        userEmail.addEventListener('click', () => {
            deleteActive();
            document.getElementById("iconEmail").style.color = "#49a6e9";
            userTitle.innerHTML = "My email is"
            userValue.innerHTML = email;
        })
        // userAge button clicked
        userAge.addEventListener('click', () => {
            deleteActive();
            document.getElementById("iconAge").style.color = "#49a6e9";
            userTitle.innerHTML = "My age is"
            userValue.innerHTML = age;
        })
        // userLocation button clicked
        userLocation.addEventListener('click', () => {
            deleteActive();
            document.getElementById("iconLocation").style.color = "#49a6e9";
            userTitle.innerHTML = "My location is"
            userValue.innerHTML = location;
        })
        // userPhone button clicked
        userPhone.addEventListener('click', () => {
            deleteActive();
            document.getElementById("iconPhone").style.color = "#49a6e9";
            userTitle.innerHTML = "My phone is"
            userValue.innerHTML = phone;
        })
        // userPassword button clicked
        userPassword.addEventListener('click', () => {
            deleteActive();
            document.getElementById("iconPassword").style.color = "#49a6e9";
            userTitle.innerHTML = "My password is"
            userValue.innerHTML = password;
        })
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
}

randomUserButton.addEventListener('click', () => {
    generateRandomUser();
});

generateRandomUser();