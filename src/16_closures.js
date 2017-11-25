var fn ;

function inicializa() {
	var x = 2 ;
	
	function interna() {
		console.log(x);
	}
	
	fn = interna;
}

inicializa();        
fn();            // 2
// console.log(x);  // error

let x = 2;
function showX() {
  console.log("x = " + x);
}
showX();   // x = 2
x = 3;
showX();   // x = 3