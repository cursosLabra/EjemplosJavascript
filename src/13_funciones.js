var suma3 = new Function("x", "return (x + 3);");

console.log(suma3(10)); //> 13


var suma4 = function(x) {
	return x + 4;
}

console.log(suma4(10));  //> 14

function suma5(x) {
	return x + 5;
}

console.log(suma5(10)); //> 15

let suma3 = (x) => { 
	return x + 3 
};

console.log(suma6(10)); //> 16
