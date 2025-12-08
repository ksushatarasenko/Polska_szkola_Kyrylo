document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".image > img");
    
    img.addEventListener("click", function() {
        img.classList.toggle("zoomed");
        if (img.classList.contains("zoomed")) {
            document.body.style.overflow = "hidden"; // блокируем прокрутку
        } else {
            document.body.style.overflow = "auto"; // возвращаем прокрутку
        }
    });
});


document.querySelectorAll('.page img').forEach(img => {
    img.addEventListener('click', () => {

        if (img.classList.contains('zoomed')) {
            img.classList.remove('zoomed');
            document.querySelector('.zoom-overlay')?.remove();
            return;
        }

        const overlay = document.createElement('div');
        overlay.className = 'zoom-overlay';
        document.body.appendChild(overlay);

        img.classList.add('zoomed');

        overlay.addEventListener('click', () => {
            img.classList.remove('zoomed');
            overlay.remove();
        });
    });
});