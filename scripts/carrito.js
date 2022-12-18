let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
const contenedorCarritoCantidad = document.querySelector(
  "#mi-carrito-cantidad"
);
const contenedorMiCarrito = document.querySelector("#mi-carrito-titulo");
const contenedorCompraRealizada = document.querySelector("#carrito-compra");

// Cargar productos al carrito

function cargarProductosCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `<img
    class="carrito-producto-imagen"
    src="${producto.imagen}"
    alt="${producto.titulo}"
  />
  <div class="carrito-producto-titulo">
    <small>Titulo</small>
    <p>${producto.titulo}</p>
  </div>
  <div class="carrito-producto-cantidad">
    <small>Cantidad</small>
    <p>${producto.cantidad}</p>
  </div>
  <div class="carrito-producto-precio">
    <small>Precio</small>
    <p>$${producto.precio}</p>
  </div>
  <div class="carrito-producto-subtotal">
    <small>Subtotal</small>
    <p>$${producto.precio * producto.cantidad}</p>
  </div>
  <button type="button" class="carrito-producto-eliminar" id="${producto.id}">
    <i class="fa-solid fa-trash"></i>
  </button>`;

      contenedorCarritoProductos.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }

  actualizarBotonesEliminar();
  actualizarNumerito();
  actualizarTotal();
}

cargarProductosCarrito();

// Actualizar numerito

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
  contenedorCarritoCantidad.innerText = nuevoNumerito + " productos";

  localStorage.setItem("numerito", nuevoNumerito);
}

// Boton eliminar producto

function actualizarBotonesEliminar() {
  let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

// Eliminar producto del carrito + SweetAlert

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex(
    (producto) => producto.id === idBoton
  );
  productosEnCarrito.splice(index, 1);
  cargarProductosCarrito();

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
    icon: "error",
    title: "Eliminaste un producto",
    width: "21em",
  });
}

// Actualizar precio total

function actualizarTotal() {
  const totalCalculado = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
  total.innerText = `$${totalCalculado}`;
}

// Boton comprar ahora + SweetAlert

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
  productosEnCarrito.length = 0;
  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );

  Swal.fire({
    icon: "success",
    title: "Pedido Realizado!",
    text: "Muchas gracias por su compra.",
  });

  contenedorCarritoVacio.classList.add("disabled");
  contenedorCarritoProductos.classList.add("disabled");
  contenedorCarritoAcciones.classList.add("disabled");
  contenedorCarritoComprado.classList.remove("disabled");
  contenedorCarritoCantidad.classList.add("disabled");
  contenedorMiCarrito.classList.add("disabled");
  contenedorCompraRealizada.classList.remove("disabled");
}

// Boton vaciar Carrito + SweetAlert

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
  let numeritoVaciar = localStorage.getItem("numerito");
  Swal.fire({
    title: "Estas seguro?",
    text: "Tienes " + numeritoVaciar + " producto/s en el carrito.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "var(--orange-color)",
    cancelButtonColor: "var(--light-gray-color)",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Carrito Vaciado!",
        "Se eliminaron " + numeritoVaciar + " producto/s.",
        "success"
      );
      productosEnCarrito.length = 0;
      localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(productosEnCarrito)
      );
      cargarProductosCarrito();
    }
  });
}
