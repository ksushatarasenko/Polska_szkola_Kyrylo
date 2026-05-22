document.addEventListener("click", function (e) {

    const img = e.target.closest(".zum");

    // Открытие картинки
    if (img) {

        const overlay = document.createElement("div");
        overlay.classList.add("image-overlay");

        const bigImg = document.createElement("img");
        bigImg.src = img.src;

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        let scale = 1;

        let isDragging = false;

        let startX = 0;
        let startY = 0;

        let translateX = 0;
        let translateY = 0;

        function updateTransform() {
            bigImg.style.transform =
                `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        }

        // Zoom колесиком
        overlay.addEventListener("wheel", function (e) {

            e.preventDefault();

            if (e.deltaY < 0) {
                scale += 0.2;
            } else {
                scale -= 0.2;
            }

            scale = Math.max(1, Math.min(scale, 6));

            // если вернули к 1x — сброс позиции
            if (scale === 1) {
                translateX = 0;
                translateY = 0;
            }

            updateTransform();

        });

        // Начало перетаскивания
        bigImg.addEventListener("mousedown", function (e) {

            if (scale <= 1) return;

            isDragging = true;

            startX = e.clientX - translateX;
            startY = e.clientY - translateY;

            bigImg.style.cursor = "grabbing";

        });

        // Перемещение
        document.addEventListener("mousemove", function (e) {

            if (!isDragging) return;

            translateX = e.clientX - startX;
            translateY = e.clientY - startY;

            updateTransform();

        });

        // Конец перетаскивания
        document.addEventListener("mouseup", function () {

            isDragging = false;

            if (scale > 1) {
                bigImg.style.cursor = "grab";
            }

        });

        // Закрытие
        overlay.addEventListener("click", function (e) {

            if (e.target === overlay) {
                overlay.remove();
            }

        });

        return;
    }

});