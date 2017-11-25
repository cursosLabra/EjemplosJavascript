
var a = new Array();
a[0] = "peras";
a[1] = "manzanas";
a[2] = "naranjas";

a.forEach(function (x) {
	console.log(x);
});

for(var i in a) {
	console.log(i + " - " + a[i]);
}

var a = ["peras", "manzanas", "naranjas" ];


a.push("kiwis");

for(var i in a) {
	console.log(i + " - " + a[i]);
}


