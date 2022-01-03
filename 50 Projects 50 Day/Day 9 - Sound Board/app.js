const buttons = document.querySelector('#buttons')
const sounds = document.querySelectorAll('audio')
const soundsNames = []

sounds.forEach(element => {
    soundsNames.push(element.id)
})

soundsNames.forEach(soundName => {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.innerHTML = soundName

    button.addEventListener('click', () => {
        pauseAllSongs()
        document.querySelector(`#${soundName}`).play();
    })

    buttons.appendChild(button)
})

function pauseAllSongs() {
    soundsNames.forEach(soundName => {
        const song = document.querySelector(`#${soundName}`)
        song.pause();
    })
}