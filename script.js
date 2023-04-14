let slideIndex = 1;
showSlides(slideIndex);

const slideInterval = setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 3000);

function changeSlide(n) {
  clearInterval(slideInterval);
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
}

document.getElementsByClassName("prev")[0].addEventListener("click", () => {
  changeSlide(-1);
});

document.getElementsByClassName("next")[0].addEventListener("click", () => {
  changeSlide(1);
});





document.getElementsByClassName("selector")[0].addEventListener("change", () => {
  clearInterval(slideInterval);
  slideIndex = parseInt(document.getElementsByClassName("selector")[0].value);
  showSlides(slideIndex);
});

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
  document.getElementsByClassName("selector")[0].value = slideIndex.toString();
}