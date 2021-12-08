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

function altura(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 !== base) {
        console.log("Es un tríangulo isoceles");
        const h = calcaltura(lado1, base);
        console.log(`Altura: ${h}`)
    } else if (lado1 === base && lado2 !== lado1) {
        console.log("Es un tríangulo isoceles");
        const h = calcaltura(lado1, lado2);
        console.log(`Altura: ${h}`)
    } else if (lado2 === base && lado2 !== lado1) {
        console.log("Es un tríangulo isoceles");
        const h = calcaltura(lado2, lado1);
        console.log(`Altura: ${h}`)
    } else {
        console.log("No es un tríangulo isoceles");
    }
}

function calcaltura(lado, base) {
    const h = Math.sqrt((lado ** 2) - ((base ** 2) / 4));
    return h;
}