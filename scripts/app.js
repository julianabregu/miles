// Cargar productos destacados con fetch

const contenedorDestacados = document.querySelector("#row-uno");

fetch("scripts/destacados.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("col-4");
      div.innerHTML = `<img src="${producto.imagen}" alt="" />
      <h4>${producto.titulo}</h4>
      <div class="rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <p class="precio">$${producto.precio}</p>`;

      contenedorDestacados.append(div);
    });
  });

// Cargar productos lanzamiento con fetch

const contenedorLanzamiento = document.querySelector("#row-dos");

fetch("scripts/lanzamiento.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("col-4");
      div.innerHTML = `<img src="${producto.imagen}" alt="" />
      <h4>${producto.titulo}</h4>
      <div class="rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star-half-stroke"></i>
        <p class="precio">$${producto.precio}</p>`;

      contenedorLanzamiento.append(div);
    });
  });
