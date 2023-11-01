

alert ("Hola! Te doy la bienvenida a mi cotizador de asesorías. ¡Empecemos!")

//if (nombreUsuario = " ") {
//    alert ("No ingresaste tu nombre")
//} else{
//    let nombreUsuario = prompt("Por favor, ingresá tu nombre") //ACA NECESITO AGREGAR UN IF PARA QUE NO CONTINUE EL ALERT VACIO EN CASO DE QUE EL USUARIO NO ESCRIBA EL NOMBRE
//    alert ("Hola! " + nombreUsuario + ", ¡Vamos a remodelar tu espacio!")
//}

let nombreUsuario = prompt("Por favor, ingresá tu nombre") //ACA NECESITO AGREGAR UN IF PARA QUE NO CONTINUE EL ALERT VACIO EN CASO DE QUE EL USUARIO NO ESCRIBA EL NOMBRE
    alert ("Hola! " + nombreUsuario + ", ¡Vamos a remodelar tu espacio!")


let ambiente = prompt ("¿Cuál es el nombre del espacio que querés remodelar?")


alert ("Perfecto, vamos a remodelar tu " + ambiente )

//let valorMetro = 120
//const valorAsesoria = superficie * valorMetro

do{
    let superficie = parseFloat (prompt ("Ingresá los mt2 de tu " + ambiente ))
} while (parseInt(superficie)) //ACA se detiene el algoritmo cuando el usuario NO ingresa un número
let superficie = 0;


let valorMetro = 120
const valorAsesoria = superficie * valorMetro


alert ("La asesoría de tu " + ambiente + "tiene un costo de USD " + valorAsesoria )

