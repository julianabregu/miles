function ingresar(){
  alert("Bienvenido a TechStore! \n\nPor favor ingresa tus datos.");
  let ingresarUsuario = prompt("Ingresa tu usuario:");
  if (ingresarUsuario){
  alert("Bienvenido" + " " + ingresarUsuario + "!" + " " + "a continuacion puedes observar nuestras categorias");
  } else {
    alert("Bienvenido Invitado, a continuacion puedes observar nuestras categorias");
  }
}

ingresar()

function productos(){
  let producto = prompt("Ingresa el numero correspondiente a la categoria. \n\n 1- Smarthphones \n 2- Notebooks \n 3- Smart TV \n 4- Relojes \n 5- Gaming \n 6- Audio");
  while (producto != "0") {
    switch (producto) {
      case "1":
        alert(" 1- Xiaomi Redmi Note 11 ...$74.999 \n 2- Samsung Galaxy S20 ...$159.999 \n 3- Motorola Edge 30 Pro ...$189.999 \n 4- Iphone 11 ...$236.799 \n 5- Iphone 13 pro max ...$315.840");
        break;
        case "2":
          alert(" 1- Dell Inspiron 3501 ...$102.500 \n 2- Asus Vivobook ...$134.999 \n 3- All In One Lenovo ...$172.990 \n 4- Macbook Air 2020 ...$287.127 \n 5- Macbook Pro ...$409.116")
          break;
          case "3":
            alert(" 1- Philips 6900 Series 43'' ...$74.999 \n 2- LG Al ThinQ 4K 50'' ...$114.999 \n 3- Samsung Series 7 4K 50'' ...$139.999 \n 4- Samsung Series 7 4K 55'' ...$169.999 \n 5- Samsung Series 7 4K 55'' ...$241.999")
            break;
        case "4":
          alert(" 1- Xiaomi Mi Smart Band 6 ...$8.965 \n 2- Amazfit Fashion GTR 2 ...$32.999 \n 3- Fitbit Versa 3 ...$60.999 \n 4- Garmin Forerunner 55 ...$85.999 \n 5- Garmin Vivoactive 4S ...$129.999");
          break;
          case "5":
            alert(" 1- Mouse Logitech G203 ...$3.641 \n 2- Teclado HyperX Alloy Core ...$7.527 \n 3- Auriculares HyperX Cloud Stinger ...$10.519 \n 4- Microfono HyperX QuadCast ...$24.499 \n 5- Monitor Samsung F24T35 ...$51.299")
            break;
            case "6":
              alert(" 1- Auriculares JBL Tune 510BT ...$10.129 \n 2- Auriculares Sennheiser HD206 ...$13.375 \n -3 Parlantes Boom 3 ...$28.999 \n 4- Parlantes JBL Flip 6 ...$37.599 \n 5- Apple Airpods Pro ...$41.016")
              break;
          default:
            alert("Opcion no valida");
            break;
    }
    producto = prompt("Ingresa el numero correspondiente a la categoria. \n 1- Smarthphones \n 2- Notebooks \n 3- Smart TV \n 4- Relojes \n 5- Gaming \n 6- Audio \n\n Para continuar ingrese 0");
  }
}

productos()

function calcularPrecio (precioArticulo, cantidadArticulo, porcentajeDescuento, costoEnvio){
  let descuento = (precioArticulo * porcentajeDescuento) / 100;
  let precioDescuento = precioArticulo - descuento;
  return (precioDescuento * cantidadArticulo) + costoEnvio;
}

const envio = 1500;

let articulo = parseInt(prompt("Ingresa el precio del articulo"));
let cantidad = parseInt(prompt("Ingresa la cantidad de articulos"));
let descuento = parseInt(prompt("Ingresa % de descuento si posees uno"));

let precioFinal = calcularPrecio(articulo, cantidad, descuento, envio);
alert(" El precio total de tu compra es $" + precioFinal);
alert(" Te enviaremos los datos de pago por mail para continuar con la compra. \n\n Gracias por confiar en nosotros! \n SmartTech.");
