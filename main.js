const usuario = {
    nombre: prompt("Ingresa tu nombre"),
    Nacionalidad: prompt("Ingresa tu nacionalidad"),
    saludar
}
function saludar(){
   alert ("Hola" + " " + this.nombre);
}
usuario.saludar();


let email = prompt("Ingresa tu email");
let password = prompt("Ingresa una contraseña");

function usuarioNuevo(email,contraseña){
    this.email = email,
    this.password = password
}

let usuario1 = new usuarioNuevo(email, password)
console.log(usuario1);

const productos = [
  { nombre: "Tops", precio: 4500 },
  { nombre: "Bombachas", precio: 3500 },
  { nombre: "Pilusos", precio: 3000 }
];

let seleccionProducto = prompt("Que estabas buscando? bombachas, tops o pilusos?");
alert( productos.filter((producto) => producto.nombre === seleccionProducto));


function calcular(){
    var valorFinal
    let total = parseInt(prompt("Ingresa el total de tu compra"));
    let descuento = parseInt(prompt("Ingresa el valor de tu descuento"));

    valorFinal = total - descuento;
    alert( nombre + "Tu precio con descuento es de :" + valorFinal);

}

if(nombre === ""){

}
else{
    saludar();
    calcular();
}

while (true){
    let edad = +prompt("Ingresa tu edad");
    
    if(edad>18){
    alert("Sos mayor de edad, avanzaremos con los medios de pago")
     break
    } else if (num<18){
     break
    }
}