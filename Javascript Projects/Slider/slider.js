const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const slides = document.querySelectorAll(".slide");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
  
counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    showPhoto();
})

prevBtn.addEventListener('click', () => {
    counter--;
    showPhoto();
})

function showPhoto() {
    if (counter < 0) {
      counter = 0;
    }
    if (counter < slides.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
    if (counter > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

  prevBtn.style.display = "none";

