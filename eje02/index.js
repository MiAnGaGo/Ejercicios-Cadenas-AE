var met=require("./cadena");

var cadena="anita lava la tina";
cadena.toLowerCase();

console.log("¿Es palindromo? "+met.esPalindromo(cadena)+"\nNumero de palabras: "+met.contarPalabras(cadena)+
"\nNumero de letras: "+met.contarLetra(cadena)+"\nNumero de vocales: "+met.contarVocal(cadena)+
"\nNumero de consonantes: "+met.contarConso(cadena));