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