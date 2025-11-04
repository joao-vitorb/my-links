document.querySelectorAll(".links button").forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.dataset.link;
    if (url) window.open(url, "_blank");
  });
});

const slider = document.querySelector(".project-slider");
const slides = document.querySelectorAll(".project-slider img");
const totalSlides = slides.length;

const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentSlide = 0;

function updateSlide() {
  const slidePercent = 100 / totalSlides;
  slider.style.transform = `translateX(-${currentSlide * slidePercent}%)`;
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
});

updateSlide();
