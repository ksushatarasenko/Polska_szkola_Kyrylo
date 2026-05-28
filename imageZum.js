document.addEventListener("click", function (e) {

    const img = e.target.closest(".zum");

    if (!img) return;

    const overlay = document.createElement("div");
    overlay.className = "image-overlay";

    const bigImg = document.createElement("img");
    bigImg.src = img.src;

    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    // закрытие
    overlay.addEventListener("click", function () {
        overlay.remove();
    });

});