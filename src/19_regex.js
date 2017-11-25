
var codigo = /\d{4}[A-Z]/ ;

console.log(codigo.test("2345X"));  // true
console.log(codigo.test("23456"));  // false

var numeros = "2345X".match(/(\d{4})[A-Z]/)[1]; 
console.log(numeros);