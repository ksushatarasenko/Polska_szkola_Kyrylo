document.addEventListener('click', function (e) {
  if (e.target.classList.contains('time')) {
    const time = parseInt(e.target.dataset.time);
    const iframe = document.getElementById('player');

    // Извлекаем ID видео из src
    const src = iframe.src;
    const match = src.match(/embed\/([^?]+)/);
    const videoId = match ? match[1] : null;

    if (videoId) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?start=${time}&autoplay=1&rel=0`;
    }
  }
});