  // Ejercicio 1 - Bienvenida ONLOAD
  function bienvenida() {
    alert("Bienvenido Franklin");
  }


 // Ejercicio 2- Array Meses
var meses = ["enero", "febrero", "marzo", "abril","mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
console.log (meses); 

function escribir() {
  document.getElementById("aqui").value = (meses)
}


// Ejercicio 3- Calculo del factorial

function calcular(){
    factor = document.getElementById("fact").value
    result = 1;
    for(var i=1; i<=factor; i++) {
        result *= i;
      }
    document.getElementById("resultado").value = result
    console.log(result);
        }
function resetea() {
            document.getElementById("fact").value = (" ")
            document.getElementById("resultado").value = (" ")
        
        }
        
// Ejercicio 4- Par o Impar
function par(){
        numero = document.getElementById("par").value
     
        if(numero % 2 == 0) {
            document.getElementById("parimpar").value = ("El número "+numero+" es par")
            
          }
          else {
            document.getElementById("parimpar").value = ("El número "+numero+" es impar")
          }
      
        }
       
function reset() {
    document.getElementById("par").value = (" ")
    document.getElementById("parimpar").value = (" ")

}

/*
Ejercicio 5 - Mayúsculas Minúsculas
*/

function maymin(){
texto = document.getElementById("maymin").value
 if(texto == texto.toLowerCase()) {
    document.getElementById("mayusculas").value = ("El texto está escrito en minúsculas")
 }
 else if(texto == texto.toUpperCase()) {
    document.getElementById("mayusculas").value = ("El texto está escrito en mayúsculas")
 }
else {
    document.getElementById("mayusculas").value = ("El texto está escrito en mayúsculas y minúsculas")
}
}

function reseteo() {
    document.getElementById("maymin").value = (" ")
    document.getElementById("mayusculas").value = (" ")

}

/* "Ejercicio 6" */
let valores = [ true, 5, false, "javascript", "Cola", "adios", 2];

// capturamos solo los strings
valores = valores.filter(item => typeof item == 'string')
// ordenar los strings de mayor a menor
valores = valores.sort( (a, b) => b.length - a.length )
console.log( valores[0] ) // retorna en console la palabra más larga
console.log( valores[2] )  // retorna en console la palabra más corta

// Otra Opcion contando caracteres 1 a 1 palabras
var x = 'hola';
var y = 'adios';

console.log('hola tiene ' + x.length + ' caracteres y adios tiene ' + y.length + ' caracteres');

