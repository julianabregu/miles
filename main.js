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
