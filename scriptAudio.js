const player = document.getElementById('player');

    document.querySelectorAll('.playable').forEach(word => {
      word.addEventListener('click', () => {
        const src = word.getAttribute('data-audio');
        player.src = src;
        player.play();
      });
    });