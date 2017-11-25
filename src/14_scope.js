
function prueba(flag) {
	if (flag) {
		var x = 20 ;
	}
	console.log(x);  
}

prueba(false);    //> undefined
console.log(x);   //> error

