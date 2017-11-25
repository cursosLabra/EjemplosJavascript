var fn ;

function externa() {
	
	function interna(x) {
		return x + 1;
	}
	
	fn = interna;
}

externa();        
console.log(fn(3));  // 4

