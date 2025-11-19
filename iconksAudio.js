document.querySelectorAll('.play-audio').forEach(btn => {
    btn.addEventListener('click', () => {
        const audio = new Audio(btn.dataset.audio);
        audio.play();
    });
});