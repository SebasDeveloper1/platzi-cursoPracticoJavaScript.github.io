//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = (ladoCuadrado * 4);

console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = Math.pow(ladoCuadrado, 2);

console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();

//Código del triangulo
console.group("Triangulos");
const ladoDerechoTriangulo = 8;
const ladoIzquierdoTriangulo = 6;
const baseTriangulo = 5;

console.log(`Los lados del triangulo miden: ${ladoDerechoTriangulo} cm, ${ladoIzquierdoTriangulo} cm y ${baseTriangulo} cm`);

const perimetroTriangulo = (ladoDerechoTriangulo + ladoIzquierdoTriangulo + baseTriangulo);

console.log(`El perímetro del triangulo es: ${perimetroTriangulo} cm`);

const semiPerimetroTriangulo = (perimetroTriangulo / 2);
const areaTriangulo = Math.sqrt(semiPerimetroTriangulo * ((semiPerimetroTriangulo - ladoDerechoTriangulo) * (semiPerimetroTriangulo - ladoIzquierdoTriangulo) * (semiPerimetroTriangulo - baseTriangulo)));

console.log(`El área del triangulo es: ${areaTriangulo} cm^2`);
console.groupEnd();

//Código del circulo
console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = (radioCirculo * 2);
const PI = Math.PI;

const perimetroCirculo = (diametroCirculo * PI);

console.log(`El perímetro del circulo es: ${perimetroCirculo} cm`);

const areaCirculo = ((radioCirculo ** 2) * PI);

console.log(`El área del circulo es: ${areaCirculo} cm^2`);

console.groupEnd();