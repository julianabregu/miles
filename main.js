/**************************************************/
// PRIMERA PRE-ENTREGA: Simulador interactivo
/**************************************************/

// alert("Bienvenidos a TechnoStore");
// function ingresar(){
//   alert("Bienvenido a TechStore! \n\nPor favor ingresa tus datos.");
//   let ingresarUsuario = prompt("Ingresa tu usuario:");
//   if (ingresarUsuario){
//   alert("Bienvenido" + " " + ingresarUsuario + "!" + " " + "a continuacion puedes observar nuestras categorias");
//   } else {
//     alert("Bienvenido Invitado, a continuacion puedes observar nuestras categorias");
//   }
// }

// ingresar()

// function productos(){
//   let producto = prompt("Ingresa el numero correspondiente a la categoria. \n\n 1- Smarthphones \n 2- Notebooks \n 3- Smart TV \n 4- Relojes \n 5- Gaming \n 6- Audio");
//   while (producto != "0") {
//     switch (producto) {
//       case "1":
//         alert(" 1- Xiaomi Redmi Note 11 ...$74.999 \n 2- Samsung Galaxy S20 ...$159.999 \n 3- Motorola Edge 30 Pro ...$189.999 \n 4- Iphone 11 ...$236.799 \n 5- Iphone 13 pro max ...$315.840");
//         break;
//         case "2":
//           alert(" 1- Dell Inspiron 3501 ...$102.500 \n 2- Asus Vivobook ...$134.999 \n 3- All In One Lenovo ...$172.990 \n 4- Macbook Air 2020 ...$287.127 \n 5- Macbook Pro ...$409.116")
//           break;
//           case "3":
//             alert(" 1- Philips 6900 Series 43'' ...$74.999 \n 2- LG Al ThinQ 4K 50'' ...$114.999 \n 3- Samsung Series 7 4K 50'' ...$139.999 \n 4- Samsung Series 7 4K 55'' ...$169.999 \n 5- Samsung Series 7 4K 55'' ...$241.999")
//             break;
//         case "4":
//           alert(" 1- Xiaomi Mi Smart Band 6 ...$8.965 \n 2- Amazfit Fashion GTR 2 ...$32.999 \n 3- Fitbit Versa 3 ...$60.999 \n 4- Garmin Forerunner 55 ...$85.999 \n 5- Garmin Vivoactive 4S ...$129.999");
//           break;
//           case "5":
//             alert(" 1- Mouse Logitech G203 ...$3.641 \n 2- Teclado HyperX Alloy Core ...$7.527 \n 3- Auriculares HyperX Cloud Stinger ...$10.519 \n 4- Microfono HyperX QuadCast ...$24.499 \n 5- Monitor Samsung F24T35 ...$51.299")
//             break;
//             case "6":
//               alert(" 1- Auriculares JBL Tune 510BT ...$10.129 \n 2- Auriculares Sennheiser HD206 ...$13.375 \n -3 Parlantes Boom 3 ...$28.999 \n 4- Parlantes JBL Flip 6 ...$37.599 \n 5- Apple Airpods Pro ...$41.016")
//               break;
//           default:
//             alert("Opcion no valida");
//             break;
//     }
//     producto = prompt("Ingresa el numero correspondiente a la categoria. \n 1- Smarthphones \n 2- Notebooks \n 3- Smart TV \n 4- Relojes \n 5- Gaming \n 6- Audio \n\n Para continuar ingrese 0");
//   }
// }

// productos()

// function calcularPrecio (precioArticulo, cantidadArticulo, porcentajeDescuento, costoEnvio){
//   let descuento = (precioArticulo * porcentajeDescuento) / 100;
//   let precioDescuento = precioArticulo - descuento;
//   return (precioDescuento * cantidadArticulo) + costoEnvio;
// }

// const envio = 1500;

// let articulo = parseInt(prompt("Ingresa el precio del articulo"));
// let cantidad = parseInt(prompt("Ingresa la cantidad de articulos"));
// let descuento = parseInt(prompt("Ingresa % de descuento si posees uno"));

// let precioFinal = calcularPrecio(articulo, cantidad, descuento, envio);
// alert(" El precio total de tu compra es $" + precioFinal);
// alert(" Te enviaremos los datos de pago por mail para continuar con la compra. \n\n Gracias por confiar en nosotros! \n SmartTech.");

/**********************************************************/
// SEGUNDA PRE-ENTREGA: Estructura, variables y objetos
/**********************************************************/

// function ingresar() {
//   function generarNumero(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   const numeroRandom = generarNumero(1, 1000);

//   let ingresarUsuario = prompt("Hola ingresá tu usuario para continuar");
//   if (ingresarUsuario) {
//     alert("Bienvenido " + ingresarUsuario + " a TechStore");
//   } else {
//     alert("Bienvenido invitado Nº " + numeroRandom + " a TechStore");
//   }
// }
// ingresar();

// const productos = [
//   { categoria: "Smartphones", nombre: "Celular Motorola", precio: "120000" },
//   { categoria: "Smartphones", nombre: "Celular Samsung", precio: "160000" },
//   { categoria: "Smartphones", nombre: "Celular Iphone", precio: "200000" },
//   { categoria: "Notebooks", nombre: "Notebook HP", precio: "100000" },
//   { categoria: "Notebooks", nombre: "Notebook Asus", precio: "140000" },
//   { categoria: "Notebooks", nombre: "Notebook Dell", precio: "250000" },
//   { categoria: "Relojes", nombre: "Reloj Garmin", precio: "75000" },
//   { categoria: "Relojes", nombre: "Reloj Samsung", precio: "110000" },
//   { categoria: "Relojes", nombre: "Reloj Amazfit", precio: "45000" },
// ];
// let carrito = [];

// let seleccion = prompt(
//   "Desea comprar algun producto? \n\nResponda si o no a continuacion"
// );

// while (seleccion != "si" && seleccion != "no") {
//   alert("Por favor ingrese si o no");
//   seleccion = prompt(
//     "Desea comprar algun producto? \n\nResponda si o no a continuacion"
//   );
// }

// if (seleccion === "si") {
//   alert("A continuacion veras nuestra lista de productos");
//   let todosLosProductos = productos.map(
//     (producto) => producto.nombre + " " + "$" + producto.precio
//   );
//   alert(todosLosProductos.join(" - "));
// } else if (seleccion === "no") {
//   alert("Gracias por visitarnos, hasta pronto!!");
// }

// while (seleccion != "no") {
//   let producto = prompt("Agrega un producto a tu carrito");
//   let precio = 0;

//   if (
//     producto == "Celular Motorola" ||
//     producto == "Celular Samsung" ||
//     producto == "Celular Iphone" ||
//     producto == "Notebook HP" ||
//     producto == "Notebook Asus" ||
//     producto == "Notebook Dell" ||
//     producto == "Reloj Garmin" ||
//     producto == "Reloj Samsung" ||
//     producto == "Reloj Amazfit"
//   ) {
//     switch (producto) {
//       case "Celular Motorola":
//         precio = 120000;
//         break;
//       case "Celular Samsung":
//         precio = 160000;
//         break;
//       case "Celular Iphone":
//         precio = 200000;
//         break;
//       case "Notebook HP":
//         precio = 100000;
//         break;
//       case "Notebook Asus":
//         precio = 140000;
//         break;
//       case "Notebook Dell":
//         precio = 250000;
//         break;
//       case "Reloj Garmin":
//         precio = 75000;
//         break;
//       case "Reloj Samsung":
//         precio = 110000;
//         break;
//       case "Reloj Amazfit":
//         precio = 45000;
//         break;
//       default:
//         break;
//     }
//     let unidades = parseInt(prompt("Cuantas unidades desea comprar?"));

//     carrito.push({ producto, unidades, precio });
//     console.log(carrito);
//   } else {
//     alert("No tenemos stock de ese producto");
//   }

//   seleccion = prompt("Desea seguir comprando? \n\nResponda si o no");

//   while (seleccion === "no") {
//     alert("Gracias por su compra!! \n\nEste es su carrito final: ");
//     carrito.forEach((carritoFinal) => {
//       console.log(
//         "Producto: " +
//           carritoFinal.producto +
//           " - " +
//           "Unidades: " +
//           carritoFinal.unidades +
//           " - " +
//           "Total a pagar: " +
//           carritoFinal.unidades * carritoFinal.precio
//       );
//       alert(
//         "Producto: " +
//           carritoFinal.producto +
//           "\n" +
//           "Unidades: " +
//           carritoFinal.unidades +
//           "\n" +
//           "Total a pagar: " +
//           carritoFinal.unidades * carritoFinal.precio
//       );
//     });
//     break;
//   }
// }

// const total = carrito.reduce(
//   (acumulador, producto) => acumulador + producto.precio * producto.unidades,
//   0
// );
// console.log("Total a pagar: $" + total);
// alert("El total a pagar por su compra es: $" + total);

/**************************************************/
// TERCERA PRE-ENTREGA: Optimizacion del proyecto
/**************************************************/

// Dark Mode 2.0
const botonColorMode = document.querySelector("#icon");
const body = document.body;

let darkMode = localStorage.getItem("dark-theme");

function activarDarkMode() {
  body.classList.add("dark-theme");
  localStorage.setItem("dark-theme", "activado");
}

function desactivarDarkMode() {
  body.classList.remove("dark-theme");
  localStorage.setItem("dark-theme", "desactivado");
}

if (darkMode === "activado") {
  activarDarkMode();
} else {
  desactivarDarkMode();
}

if (darkMode === "activado") {
  icon.src = "./images/web/sun.png";
} else {
  icon.src = "./images/web/moon.png";
}

botonColorMode.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-theme");
  if (darkMode === "activado") {
    desactivarDarkMode();
  } else {
    activarDarkMode();
  }
});

botonColorMode.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-theme");
  if (darkMode === "activado") {
    icon.src = "./images/web/sun.png";
  } else {
    icon.src = "./images/web/moon.png";
  }
});

/* Productos */

const productos = [
  // Zapatillas
  {
    id: "zapatilla-01",
    titulo: "Zapatilla 01",
    imagen: "./images/zapatillas/zapatilla-01.jpg",
    categoria: {
      nombre: "Zapatillas",
      id: "zapatillas",
    },
    precio: 1000,
  },
  {
    id: "zapatilla-02",
    titulo: "Zapatilla 02",
    imagen: "./images/zapatillas/zapatilla-02.jpg",
    categoria: {
      nombre: "Zapatillas",
      id: "zapatillas",
    },
    precio: 1000,
  },
  {
    id: "zapatilla-03",
    titulo: "Zapatilla 03",
    imagen: "./images/zapatillas/zapatilla-03.jpg",
    categoria: {
      nombre: "Zapatillas",
      id: "zapatillas",
    },
    precio: 1000,
  },
  {
    id: "zapatilla-04",
    titulo: "Zapatilla 04",
    imagen: "./images/zapatillas/zapatilla-04.jpg",
    categoria: {
      nombre: "Zapatillas",
      id: "zapatillas",
    },
    precio: 1000,
  },
  {
    id: "zapatilla-05",
    titulo: "Zapatilla 05",
    imagen: "./images/zapatillas/zapatilla-05.jpg",
    categoria: {
      nombre: "Zapatillas",
      id: "zapatillas",
    },
    precio: 1000,
  },
  {
    id: "zapatilla-06",
    titulo: "Zapatilla 06",
    imagen: "./images/zapatillas/zapatilla-06.jpg",
    categoria: {
      nombre: "Zapatillas",
      id: "zapatillas",
    },
    precio: 1000,
  },
  // Remeras
  {
    id: "remera-01",
    titulo: "Remera 01",
    imagen: "./images/remeras/remera-01.jpg",
    categoria: {
      nombre: "Remeras",
      id: "remeras",
    },
    precio: 1000,
  },
  {
    id: "remera-02",
    titulo: "Remera 02",
    imagen: "./images/remeras/remera-02.jpg",
    categoria: {
      nombre: "Remeras",
      id: "remeras",
    },
    precio: 1000,
  },
  {
    id: "remera-03",
    titulo: "Remera 03",
    imagen: "./images/remeras/remera-03.jpg",
    categoria: {
      nombre: "Remeras",
      id: "remeras",
    },
    precio: 1000,
  },
  {
    id: "remera-04",
    titulo: "Remera 04",
    imagen: "./images/remeras/remera-04.jpg",
    categoria: {
      nombre: "Remeras",
      id: "remeras",
    },
    precio: 1000,
  },
  {
    id: "remera-05",
    titulo: "Remera 05",
    imagen: "./images/remeras/remera-05.jpg",
    categoria: {
      nombre: "Remeras",
      id: "remeras",
    },
    precio: 1000,
  },
  {
    id: "remera-06",
    titulo: "Remera 06",
    imagen: "./images/remeras/remera-06.jpg",
    categoria: {
      nombre: "Remeras",
      id: "remeras",
    },
    precio: 1000,
  },
  // Shorts
  {
    id: "short-01",
    titulo: "Short 01",
    imagen: "./images/shorts/short-01.jpg",
    categoria: {
      nombre: "Shorts",
      id: "shorts",
    },
    precio: 1000,
  },
  {
    id: "short-02",
    titulo: "Short 02",
    imagen: "./images/shorts/short-02.jpg",
    categoria: {
      nombre: "Shorts",
      id: "shorts",
    },
    precio: 1000,
  },
  {
    id: "short-03",
    titulo: "Short 03",
    imagen: "./images/shorts/short-03.jpg",
    categoria: {
      nombre: "Shorts",
      id: "shorts",
    },
    precio: 1000,
  },
  {
    id: "short-04",
    titulo: "Short 04",
    imagen: "./images/shorts/short-04.jpg",
    categoria: {
      nombre: "Shorts",
      id: "shorts",
    },
    precio: 1000,
  },
  {
    id: "short-05",
    titulo: "Short 05",
    imagen: "./images/shorts/short-05.jpg",
    categoria: {
      nombre: "Shorts",
      id: "shorts",
    },
    precio: 1000,
  },
  {
    id: "short-06",
    titulo: "Short 06",
    imagen: "./images/shorts/short-06.jpg",
    categoria: {
      nombre: "Shorts",
      id: "shorts",
    },
    precio: 1000,
  },
  // Pantalones
  {
    id: "pantalon-01",
    titulo: "Pantalon 01",
    imagen: "./images/pantalones/pantalon-01.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-02",
    titulo: "Pantalon 02",
    imagen: "./images/pantalones/pantalon-02.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-03",
    titulo: "Pantalon 03",
    imagen: "./images/pantalones/pantalon-03.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-04",
    titulo: "Pantalon 04",
    imagen: "./images/pantalones/pantalon-04.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-05",
    titulo: "Pantalon 05",
    imagen: "./images/pantalones/pantalon-05.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-06",
    titulo: "Pantalon 06",
    imagen: "./images/pantalones/pantalon-06.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  // Accesorios
  {
    id: "accesorio-01",
    titulo: "Accesorio 01",
    imagen: "./images/accesorios/accesorio-01.jpg",
    categoria: {
      nombre: "Accesorios",
      id: "accesorios",
    },
    precio: 1000,
  },
  {
    id: "accesorio-02",
    titulo: "Accesorio 02",
    imagen: "./images/accesorios/accesorio-02.jpg",
    categoria: {
      nombre: "Accesorios",
      id: "accesorios",
    },
    precio: 1000,
  },
  {
    id: "accesorio-03",
    titulo: "Accesorio 03",
    imagen: "./images/accesorios/accesorio-03.jpg",
    categoria: {
      nombre: "Accesorios",
      id: "accesorios",
    },
    precio: 1000,
  },
  {
    id: "accesorio-04",
    titulo: "Accesorio 04",
    imagen: "./images/accesorios/accesorio-04.jpg",
    categoria: {
      nombre: "Accesorios",
      id: "accesorios",
    },
    precio: 1000,
  },
  {
    id: "accesorio-05",
    titulo: "Accesorio 05",
    imagen: "./images/accesorios/accesorio-05.jpg",
    categoria: {
      nombre: "Accesorios",
      id: "accesorios",
    },
    precio: 1000,
  },
  {
    id: "accesorio-06",
    titulo: "Accesorio 06",
    imagen: "./images/accesorios/accesorio-06.jpg",
    categoria: {
      nombre: "Accesorios",
      id: "accesorios",
    },
    precio: 1000,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img
              class="producto-imagen"
              src="${producto.imagen}"
              alt="${producto.titulo}"
            />
            <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">${producto.precio}</p>
              <button class="producto-agregar" id=""${producto.id}>Agregar al carrito</button>
            </div>
    `;

    contenedorProductos.append(div);
  });
}

cargarProductos(productos);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;
      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});
