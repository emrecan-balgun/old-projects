var slideIndex = 1;
showDivs(slideIndex);

function slideEvent(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName('mySlides');
  if (n > x.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = x.length
    }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  let imageUrl = x[slideIndex-1].getAttribute('src');
//   document.body.style.backgroundImage = `url(${imageUrl})`;
  document.querySelector('body').style.backgroundImage = `url(${imageUrl})`;
  
  x[slideIndex-1].style.display = "block";  
}