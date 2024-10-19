document.querySelectorAll('.like-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const likeCount = icon.previousElementSibling; // Selecciona el span que contiene el contador
        let count = parseInt(likeCount.innerText);
        count++;
        likeCount.innerText = count; // Actualiza el contador
    });
});

document.querySelectorAll('.submitComment').forEach(button => {
    button.addEventListener('click', (e) => {
        const commentInput = e.target.previousElementSibling; // Selecciona el input de comentario
        const commentsList = e.target.parentElement.nextElementSibling; // Selecciona la lista de comentarios
        const comment = commentInput.value;

        if (comment) {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            commentsList.appendChild(commentElement); // Agrega el comentario a la lista
            commentInput.value = ''; // Limpia el campo de entrada
        }
    });
});

function changeVideo(videoSrc) {
    const mainVideo = document.getElementById('mainVideo');
    mainVideo.src = videoSrc;
    mainVideo.play(); // Iniciar el video al cambiar
}
