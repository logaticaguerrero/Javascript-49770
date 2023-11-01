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
        ambiente = prompt ("¿Cuál es el nombre del espacio que querés remodelar?");
    
        if (ambiente !== null && ambiente !== "") {
            alert("Perfecto, vamos a remodelar tu " + ambiente );
        } else {
            alert("No ingresaste el nombre de tu espacio a remodelar");
        }
    } while (ambiente === null || ambiente === "");

function cotizar() {
    let superficie;
    let intento = 1

    do {
        superficie = parseFloat(prompt("Ingresá los m2 de tu " + ambiente));

        if (superficie >= 5 && superficie < 25 && intento <= 3) {
            let valorMetro = 60;
            const valorAsesoria = superficie * valorMetro;
            alert("Ingresaste " + superficie + " m². La asesoría de tu " + ambiente + " tiene un costo de USD " + valorAsesoria);
            break;
        } else if (superficie < 5  && intento <= 3) {
            let valorMetro = 60;
            const minimoAsesoria = 5 * valorMetro;
            alert("Ingresaste " + superficie + " m². Recordá que el mínimo de superficie para una asesoría es de 5m². La asesoría de tu " + ambiente + " tiene un costo de " + minimoAsesoria + " USD");
        } else if (superficie > 25  && intento <= 3) {
            alert("Ingresaste " + superficie + " m². Tu " + ambiente + " es muy grande y, para una mejor experiencia, el valor de tu asesoría requiere que la evaluemos personalmente");
        } else {
            alert("No ingresaste ningún valor o el valor es erróneo. Por favor, ingresa un valor válido.")
            intento++
            if (intento >3){
                alert ("Parece que necesitás más tiempo para medir tu ambiente. Volvé más tarde")
                console.error("El usuario no ingresó datos válidos para hacer una cotización")
                break
            }
        }
    } while (superficie === null || isNaN(superficie)); 
}

cotizar();
