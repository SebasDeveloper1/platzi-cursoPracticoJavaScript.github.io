//Código del circulo
console.group("Circulos");

function diametroCirculo(radioCirculo) {
    return (radioCirculo * 2);
}

function perimetroCirculo(radioCirculo) {
    return (diametroCirculo(radioCirculo) * Math.PI);
};

function areaCirculo(radioCirculo) {
    return ((radioCirculo ** 2) * Math.PI);
}

console.groupEnd();