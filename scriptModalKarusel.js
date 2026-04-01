const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const images = document.querySelectorAll('.carousel img');

let current = 0;

// открыть
openBtn.onclick = () => {
  modal.style.display = 'flex';
};

// закрыть (крестик)
closeBtn.onclick = () => {
  modal.style.display = 'none';
};

// закрыть (клик вне)
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

// закрыть (Esc)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});

// показать слайд
function showSlide(index) {
  images[current].classList.remove('active');
  current = (index + images.length) % images.length;
  images[current].classList.add('active');
}

// кнопки
document.getElementById('prev').onclick = () => {
  showSlide(current - 1);
};

document.getElementById('next').onclick = () => {
  showSlide(current + 1);
};