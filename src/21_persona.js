var Persona = function(nombre,edad) {
	
	this.nombre = nombre;
	this.edad = edad;
	
	this.toString = function() {
		return "Persona: " + this.nombre + " " + this.edad ;
	}
	
	this.crece = function() { 
		this.edad += 1;
		return this;
	}
	
	this.get_edad = function() { return edad; }
	this.masViejo = function(otro) { return this.get_edad() > otro.get_edad() ; }
};

var juan = new Persona("Juan",34);
var luis = new Persona("Luis",22);

console.log("Juan: " + juan);
console.log("Luis: " + luis);

juan.crece();

console.log("Juan: " + juan);
console.log("Luis: " + luis);

console.log(juan.masViejo(luis));