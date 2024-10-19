document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".image-box");
    sliders.forEach(slider => {
        let currentIndex = 0;
        const images = slider.querySelectorAll(".slider-image");
        const totalImages = images.length;

        function showNextImage() {
            // Ocultar la imagen actual
            images[currentIndex].classList.remove("active");

            // Calcular el siguiente índice
            currentIndex = (currentIndex + 1) % totalImages;

            // Mostrar la siguiente imagen
            images[currentIndex].classList.add("active");
        }

        // Cambiar de imagen cada 5 segundos
        setInterval(showNextImage, 5000);
    });

    // Mostrar el div oculto después de 5 segundos
    setTimeout(() => {
        const hiddenDiv = document.getElementById("hiddenDiv");
        hiddenDiv.style.display = "block";
    }, 5000);

    // Cerrar el div al hacer clic en el botón
    document.getElementById("closeButton").addEventListener("click", () => {
        const hiddenDiv = document.getElementById("hiddenDiv");
        hiddenDiv.style.display = "none";
    });
});