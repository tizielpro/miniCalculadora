'use strict';
/*
Calculadora:
-pida dos numero por pantalla.
-si metemos uno mal de nos los vuelva a pedir.
-mostrar en el cuerpo de la pagina, por una alerta y po la
consola el resultado de sumar, restar, multiplicar y dividir
las dos cifras.
*/
alert("<=Calculadora=>");

var numero1 = parseInt(prompt("pon el primer número",0));
var numero2 = parseInt(prompt("pon el segundo número",0));

while(isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0){
	numero1 = parseInt(prompt("pon el primer número",0));
	numero2 = parseInt(prompt("pon el segundo número",0));
}
alert("Calculando");

var resultado = `Calculos realizados entre ${numero1} y ${numero2}<br>
La suma es: ${(numero1 + numero2)}<br>
La resta es: ${(numero1 - numero2)}<br>
La multiplicación es: ${(numero1 * numero2)}<br>
La división es: ${(numero1 / numero2)}<br>`

var resultadoAC = `Calculos realizados entre ${numero1} y ${numero2}
La suma es: ${(numero1 + numero2)}
La resta es: ${(numero1 - numero2)}
La multiplicación es: ${(numero1 * numero2)}
La división es: ${(numero1 / numero2)}`

document.write(resultado);
alert(resultadoAC);
console.log(resultadoAC);
