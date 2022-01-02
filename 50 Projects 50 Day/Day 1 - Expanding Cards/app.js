const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClass();
        panel.classList.add('w-100');
    })
});

function removeClass() {
    panels.forEach(panel => {
        panel.classList.remove('w-100');
    })
}