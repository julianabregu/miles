import { productos } from "../scripts/productos.js";

// Cargando productos

const contenedorProductos = document.querySelector("#row");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloCategorias = document.querySelector("#titulo-categorias");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";
  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("col-4");
    div.innerHTML = `<img
    class="producto-imagen"
    src=${producto.imagen}
    alt=${producto.titulo}"
  />  
  <button type="button" class="producto-agregar" id=${producto.id}><img src="../images/web/bolso.png" alt="bolso image"></img></button>
  <h4 class="producto-titulo">${producto.titulo}</h4>
  <p class="producto-precio">$${producto.precio}</p>`;

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

cargarProductos(productos);

// Filtro despegable

window.onclick = function (event) {
  document.getElementById("myDropdown").classList.toggle("show");
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Filtro productos

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloCategorias.innerText = productoCategoria.categoria.nombre;

      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloCategorias.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

// Boton agregar al carrito

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

// Agregar producto al carrito + SweetAlert

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
  });

  Toast.fire({
    icon: "success",
    title: "Agregaste un producto",
    width: "21em",
  });
}

// Actualizar numerito

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}
