//PRIMERA PREENTREGA PROYECTO FINAL

// alert("Hola! Te doy la bienvenida a mi cotizador de asesorías. ¡Empecemos!");

//     let nombreUsuario;
    
//     do {
//         nombreUsuario = prompt("Por favor, ingresá tu nombre");
    
//         if (nombreUsuario !== null && nombreUsuario !== "") {
//             alert("Hola! " + nombreUsuario + ", ¡Vamos a remodelar tu espacio!");
//         } else {
//             alert("No ingresaste tu nombre");
//         }
//     } while (nombreUsuario === null || nombreUsuario === "");

//     let ambiente;
    
//     do {
//         ambiente = prompt ("¿Cuál es el nombre del espacio que querés remodelar?");
    
//         if (ambiente !== null && ambiente !== "") {
//             alert("Perfecto, vamos a remodelar tu " + ambiente );
//         } else {
//             alert("No ingresaste el nombre de tu espacio a remodelar");
//         }
//     } while (ambiente === null || ambiente === "");

// function cotizar() {
//     let superficie;
//     let intento = 1

//     do {
//         superficie = parseFloat(prompt("Ingresá los m2 de tu " + ambiente));

//         if (superficie >= 5 && superficie < 25 && intento <= 3) {
//             let valorMetro = 60;
//             const valorAsesoria = superficie * valorMetro;
//             alert("Ingresaste " + superficie + " m². La asesoría de tu " + ambiente + " tiene un costo de USD " + valorAsesoria);
//             break;
//         } else if (superficie < 5  && intento <= 3) {
//             let valorMetro = 60;
//             const minimoAsesoria = 5 * valorMetro;
//             alert("Ingresaste " + superficie + " m². Recordá que el mínimo de superficie para una asesoría es de 5m². La asesoría de tu " + ambiente + " tiene un costo de " + minimoAsesoria + " USD");
//         } else if (superficie > 25  && intento <= 3) {
//             alert("Ingresaste " + superficie + " m². Tu " + ambiente + " es muy grande y, para una mejor experiencia, el valor de tu asesoría requiere que la evaluemos personalmente");
//         } else {
//             alert("No ingresaste ningún valor o el valor es erróneo. Por favor, ingresa un valor válido.")
//             intento++
//             if (intento >3){
//                 alert ("Parece que necesitás más tiempo para medir tu ambiente. Volvé más tarde")
//                 console.error("El usuario no ingresó datos válidos para hacer una cotización")
//                 break
//             }
//         }
//     } while (superficie === null || isNaN(superficie)); 
// }

// cotizar();

//SEGUNDA PREENTREGA PROYECTO FINAL

alert("Hola! Te doy la bienvenida a mi cotizador de asesorías. ¡Empecemos!");

let nombreUsuario;

do {
    nombreUsuario = prompt("Por favor, ingresá tu nombre");

    if (nombreUsuario !== null && nombreUsuario !== "") {
        alert("Hola! " + nombreUsuario + ", ¡Vamos a remodelar tu espacio!");
    } else {
        alert("No ingresaste tu nombre");
    }
} while (nombreUsuario === null || nombreUsuario === "");

let ambiente;

do {
    ambiente = prompt("¿Cuál es el nombre del espacio que querés remodelar?");

    if (ambiente !== null && ambiente !== "") {
        alert("Perfecto, vamos a remodelar tu " + ambiente);
    } else {
        alert("No ingresaste el nombre de tu espacio a remodelar");
    }
} while (ambiente === null || ambiente === "");

// Objeto para representar el carrito
let carrito = {
    productos: [],
    total: 0,
};

function cotizar(nombreAmbiente) {
    let superficie;
    let intento = 1;

    do {
        let entradaUsuario = prompt("Ingresá los m2 de tu " + nombreAmbiente);

        if (entradaUsuario === null) {
            // El usuario canceló la entrada
            alert("Operación cancelada.");
            return;
        }

        superficie = parseFloat(entradaUsuario);

        if (!isNaN(superficie) && superficie >= 0) {
            // El valor es válido
            if (superficie >= 5 && superficie < 25 && intento <= 3) {
                let valorMetro = 60;
                const valorAsesoria = superficie * valorMetro;
                const confirmAgregarAlCarrito = confirm("La asesoría de tu " + nombreAmbiente + " tiene un costo de USD " + valorAsesoria + ". ¿Deseas agregarla al carrito?");
                
                if (confirmAgregarAlCarrito) {
                    // Agregar producto al carrito
                    carrito.productos.push({ nombre: nombreAmbiente, superficie: superficie, precio: valorAsesoria });
                    carrito.total += valorAsesoria;
                    alert("Producto agregado al carrito");
                }

                // Preguntar por una nueva cotización
                const realizarNuevaCotizacion = confirm("¿Deseas realizar una nueva cotización?");
                if (!realizarNuevaCotizacion) {
                    // Finalizar el programa
                    alert("Gracias por usar nuestro servicio. ¡Esperamos verte de nuevo pronto!");
                    return;
                }

                break;
            } else if (superficie < 5 && intento <= 3) {
                let valorMetro = 60;
                const minimoAsesoria = 5 * valorMetro;
                const confirmAgregarAlCarrito = confirm("Recordá que el mínimo de superficie para una asesoría es de 5m². La asesoría de tu " + nombreAmbiente + " tiene un costo de " + minimoAsesoria + " USD. ¿Deseas agregarla al carrito?");
                
                if (confirmAgregarAlCarrito) {
                    // Agregar producto al carrito
                    carrito.productos.push({ nombre: nombreAmbiente, superficie: superficie, precio: minimoAsesoria });
                    carrito.total += minimoAsesoria;
                    alert("Producto agregado al carrito");
                }

                // Preguntar por una nueva cotización
                const realizarNuevaCotizacion = confirm("¿Querés realizar una nueva cotización?");
                if (!realizarNuevaCotizacion) {
                    // Finalizar el programa
                    alert("Gracias por usar nuestro servicio. ¡Esperamos verte de nuevo pronto!");
                    return;
                }
            } else if (superficie > 25 && intento <= 3) {
                alert("Ingresaste " + superficie + " m². Tu " + nombreAmbiente + " es muy grande y, para una mejor experiencia, el valor de tu asesoría requiere que la evaluemos personalmente");
            } else {
                alert("No ingresaste ningún valor o el valor es erróneo. Por favor, ingresá un valor válido.")
                intento++
                if (intento > 3) {
                    // Mostrar mensaje de agradecimiento y preguntar por una nueva cotización
                    const realizarNuevaCotizacion = confirm("Parece que necesitás más tiempo para medir tu ambiente. ¿Deseás realizar una nueva cotización?");
                    if (!realizarNuevaCotizacion) {
                        // Finalizar el programa
                        alert("Gracias por usar nuestro servicio. ¡Esperamos verte de nuevo pronto!");
                        console.error("El usuario no ingresó datos válidos para hacer una cotización");
                        return;
                    }
                }
            }
        } else {
            alert("Ingresaste un valor no válido. Por favor, ingresá un valor numérico positivo.")
        }
    } while (true);
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    if (carrito.productos.length === 0) {
        alert("Tu carrito está vacío");
    } else {
        let mensaje = "Productos en tu carrito:\n";
        carrito.productos.forEach(producto => {
            mensaje += producto.nombre + " - " + producto.superficie + "m² - USD " + producto.precio + "\n";
        });
        mensaje += "Total: USD " + carrito.total;
        alert(mensaje);
    }
}

// Ciclo para realizar cotizaciones y agregar al carrito
do {
    cotizar(ambiente);
    mostrarCarrito();

    // Preguntar al usuario si desea agregar otra cotización al carrito
    const agregarOtraCotizacion = confirm("¿Querés agregar otra cotización al carrito?");

    if (!agregarOtraCotizacion) {
        // Mostrar el contenido final del carrito
        mostrarCarrito();
        
        // Finalizar el programa
        alert("Gracias por usar nuestro servicio. ¡Esperamos verte de nuevo pronto!");
        break;
    }

    // Pedir al usuario el nombre del nuevo ambiente
    do {
        ambiente = prompt("¿Cuál es el nombre del nuevo espacio que querés cotizar?");

        if (ambiente !== null && ambiente !== "") {
            alert("Perfecto, vamos a cotizar tu " + ambiente);
        } else {
            alert("No ingresaste el nombre de tu espacio a cotizar");
        }
    } while (ambiente === null || ambiente === "");

} while (true);
