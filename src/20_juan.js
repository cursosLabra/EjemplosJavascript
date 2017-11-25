var juan = {
 nombre: "Juan",
 edad: 34,
 crece: function () {
	this.edad += 1;
 },
 
 masViejo: function (otro) {
	return (this.edad > otro.getEdad());
 },
 
 getEdad: function () {
	return this.edad
 }
};

console.log(juan.nombre);
juan.crece();
console.log(juan.getEdad());

var pepe = {
 nombre : "Pepe",
 getEdad : function() {
 	return 15
 }
};

console.log(juan.masViejo(pepe));
