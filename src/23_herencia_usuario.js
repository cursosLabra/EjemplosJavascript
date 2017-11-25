var Persona = function(nombre,edad) {
	this.nombre = nombre;
	this.edad = edad;
};

Persona.prototype.toString = function() {
		return "Persona: " + this.nombre + " " + this.edad ;
}
	
Persona.prototype.crece = function() { 
		this.edad += 1;
		return this;
}

Persona.prototype.get_edad = function() { 
	return this.edad; 
};

Persona.prototype.masViejo = function(otro) { 
	return this.get_edad() > otro.get_edad() ; 
};


var Usuario = function(nombre,edad,email) {
	Persona.call(this,nombre,edad);
	this.email = email;
}

Usuario.prototype = Object.create(Persona.prototype);
Usuario.prototype.constructor = Persona;

Usuario.prototype.toString = function() {
		return "Usuario: " + this.nombre + " " + this.edad + " " + this.email;
};

Usuario.prototype.login = function(email) {
	return this.email == email ; 
}; 


var juan = new Persona("Juan",34);
var luis = new Usuario("Luis",22,"luis@example.com");

console.log("Juan: " + juan);
console.log("Luis: " + luis);

juan.crece();
luis.crece();

console.log("Juan: " + juan);
console.log("Luis: " + luis);

console.log(juan.masViejo(luis));

console.log("Login: " + luis.login("luis@example.com"));
