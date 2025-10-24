let player;

    // 1. Загружаем YouTube iframe API
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'CLIK2Vn6Lss',
        playerVars: { 'rel': 0, 'showinfo': 0 }
      });
    }

    // 2. Обрабатываем клики по таймкодам
    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('time')) {
        const time = parseInt(e.target.dataset.time);
        if (player && player.seekTo) {
          player.seekTo(time, true);
          player.playVideo();
        }
      }
    });