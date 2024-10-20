document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 6; // Número de productos por página
    const products = document.querySelectorAll('.product'); // Todos los productos
    const pagination = document.getElementById('pagination'); // Contenedor de la paginación

    let currentPage = 1;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Función para mostrar productos de acuerdo a la página actual
    function showPage(page) {
        currentPage = page;
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        products.forEach((product, index) => {
            product.style.display = (index >= start && index < end) ? 'block' : 'none';
        });

        updatePagination();
    }

    // Función para actualizar los botones de paginación
    function updatePagination() {
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('page-btn');
            if (i === currentPage) {
                button.classList.add('active');
            }

            button.addEventListener('click', () => showPage(i));
            pagination.appendChild(button);
        }
    }

    // Mostrar la primera página al cargar
    showPage(currentPage);

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
