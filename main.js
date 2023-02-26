let nombre = prompt("Ingresa tu nombre");
function saludar(){
   alert ("Hola" + nombre);
}
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