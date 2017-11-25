var pepe1 = { nombre: "Jose Luis", edad: 34 };

console.log(pepe1.nombre);      //> Jose Luis
console.log(pepe1["nombre"]);   //> Jose Luis

/// 

var pepe2 = { "nombre": "Jose Luis", "edad": 34 };

console.log(pepe2.nombre);

/// 

var pepe3 = new Object();
pepe3.nombre = "Jose Luis";
pepe3.edad = 34 ;

console.log(pepe3.nombre);

/// Creación de objetos a partir  de una función constructora

function Persona(nombre,edad) {
	this.nombre = nombre ;
	this.edad = edad ;
};

var pepe4 = new Persona("Jose Luis", 34);

console.log(pepe4.nombre);

/// 

var pepe5 = new Object({ nombre: "Jose Luis", edad: 34 });

console.log("pepe5 = " + pepe5.nombre);

var x = 2 ;

var pepe1 = { "x " : 33 };

console.log(pepe1["x "]);
