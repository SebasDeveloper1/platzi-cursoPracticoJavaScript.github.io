//Código del triangulo
console.group("Triangulos");
function perimetroTriangulo(ladoDerechoTriangulo, ladoIzquierdoTriangulo, baseTriangulo) {
    return (ladoDerechoTriangulo + ladoIzquierdoTriangulo + baseTriangulo);
}

function areaTriangulo1(ladoDerechoTriangulo, ladoIzquierdoTriangulo, baseTriangulo) {
    const semiPerimetroTriangulo = ((ladoDerechoTriangulo + ladoIzquierdoTriangulo + baseTriangulo) / 2);
    return Math.sqrt(semiPerimetroTriangulo * ((semiPerimetroTriangulo - ladoDerechoTriangulo) * (semiPerimetroTriangulo - ladoIzquierdoTriangulo) * (semiPerimetroTriangulo - baseTriangulo)));
}

function areaTriangulo2(baseTriangulo, alturaTriangulo) {
    return ((baseTriangulo * alturaTriangulo) / 2);
}
console.groupEnd();