var Persona = function(nombre,edad) {
	this.nombre = nombre;
	this.edad = edad;
};

Persona.prototype.crece = function() { 
		this.edad += 1;
		return this;
}
	
Persona.prototype.get_edad = 
	function() { return this.edad; };

Persona.prototype.masViejo = function(otro) { 
	return this.get_edad() > otro.get_edad() ; 
};

var juan = new Persona("Juan",34);
var pepe = new Persona("Jose",23);
juan.crece();

console.log(juan.edad);           //> 35
console.log(juan.masViejo(pepe)); //> true
