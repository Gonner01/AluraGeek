document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("product-form");
    const productList = document.getElementById("products");

    productForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const image = document.getElementById("image").value;

        // Crear la tarjeta del producto
        const productCard = document.createElement("div");
        productCard.classList.add("card");

        productCard.innerHTML = `
            <img src="${image}" alt="${name}">
            <h4>${name}</h4>
            <p>$ ${price}</p>
            <button class="delete-btn">🗑️</button>
        `;

        // Agregar botón de eliminar
        productCard.querySelector(".delete-btn").addEventListener("click", () => {
            productCard.remove();
        });

        // Agregar al contenedor
        productList.appendChild(productCard);

        // Limpiar formulario
        productForm.reset();
    });
});
