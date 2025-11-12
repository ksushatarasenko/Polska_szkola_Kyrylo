const track = document.getElementById('track');
const slides = document.querySelectorAll('.carousel img');
let index = 0;

document.getElementById('next').onclick = () => {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};