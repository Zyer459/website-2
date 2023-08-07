let Index = 1;
showSlide (Index);

function plusSlides (n) {
  showSlide (Index += n);
}
function currentSlide (n) {
  showSlide (Index = n);
}

function showSlide (n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {Index = 1;}
  if (n < 1) {Index = slides.length;}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[Index - 1].style.display = "block";
  dots[Index - 1].className += " active";
}