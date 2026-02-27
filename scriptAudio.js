const player = document.getElementById('player');

    document.querySelectorAll('.playable').forEach(word => {
      word.addEventListener('click', () => {
        const src = word.getAttribute('data-audio');
        player.src = src;
        player.play();
      });
    });

    // кликаешь по времени, и плеер перематывает аудио к нужному моменту:
function setTime(event, seconds) {
  event.preventDefault(); // отменяем переход по ссылке
  const audio = document.getElementById("audio");
  if (audio) {
    audio.currentTime = seconds;
    audio.play();
  }
}

document.addEventListener("DOMContentLoaded", function () {

  const player = document.getElementById("player");

  document.addEventListener("click", function(e) {
    const button = e.target.closest(".play-audio");
    if (!button) return;

    const src = button.dataset.audio;

    if (src) {
      player.src = src;
      player.play();
    }
  });

});