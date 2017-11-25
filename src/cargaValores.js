function nuevoP(i) {
    var p = document.createElement("button");
    var texto = document.createTextNode(i);
    p.appendChild(texto);
    p.setAttribute('onclick',"muestra(" + i + ");");
    document.body.appendChild(p);
}

function muestra(e) {
    var resultado = document.getElementById("resultado");
    resultado.innerText = e + " * " + e + " = " + e * e;
}

for (i = 0; i < 100; i++) {
    nuevoP(i);
}
