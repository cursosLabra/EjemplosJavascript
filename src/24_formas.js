// Forma - superclase
function Forma() {
  this.x = 0;
  this.y = 0;
  
}

// Método de superclase
Forma.prototype.mover = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Mover forma (' + x + "," + y + ") nueva pos = (" + this.x + "," + this.y + ")");
};

Forma.prototype.area = function() {
	  return 0;
}


// Rectángulo - subclase
function Rectangulo(base,altura) {
  Forma.call(this); // llamar constructor super
  this.base = base ;
  this.altura = altura ;
  
}

Rectangulo.prototype = Object.create(Forma.prototype);
Rectangulo.prototype.constructor = Rectangulo;
Rectangulo.prototype.area = function() {
	  return this.base * this.altura ;
};


var rect = new Rectangulo(7,8);

console.log(rect instanceof Rectangulo); 
console.log(rect instanceof Forma); 

rect.mover(1, 1); 
rect.mover(3, 4);

console.log("Area de rectangulo = " + rect.area());

// Circulo - subclase
function Circulo(radio) {
  Forma.call(this); // llamar constructor super
  this.radio = radio;
  
}

// subclase extiende superclase
Circulo.prototype = Object.create(Forma.prototype);
// Circulo.prototype.constructor = Circulo;
Circulo.prototype.area = function() {
	  return Math.PI * this.radio * this.radio ;
}; 

var circ = new Circulo(4);

circ.mover(2,3);

console.log("Area de circulo = " + circ.area());
console.log("Radio = " + circ.radio);
