//Código del cuadrado
function squarePerimeter(lado) {
    return lado * 4;
}

function squareArea(lado) {
    return Math.pow(lado, 2);
}

//Código del triangulo
function trianglePerimeter(side1, side2, baseTriangle) {
    return (side1 + side2 + baseTriangle);
}

function triangleArea1(side1, side2, baseTriangle) {
    const triangleSemiperimeter = ((side1 + side2 + baseTriangle) / 2);
    return Math.sqrt(triangleSemiperimeter * ((triangleSemiperimeter - side1) * (triangleSemiperimeter - side2) * (triangleSemiperimeter - baseTriangle)));
}

function triangleArea2(baseTriangle, triangleHeight) {
    return ((baseTriangle * triangleHeight) / 2);
}

//Código del circulo
function circleDiameter(circleRadio) {
    return (circleRadio * 2);
}

function circlePerimeter(circleRadio) {
    return (circleDiameter(circleRadio) * Math.PI);
};

function circleArea(circleRadio) {
    return ((circleRadio ** 2) * Math.PI);
}

function calculateSquarePerimeter() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const perimetro = squarePerimeter(value);
    const result = document.getElementById("squareResult");
    result.innerHTML = perimetro;
}

function calculateSquareArea() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const area = squareArea(value);
    const result = document.getElementById("squareResult");
    result.innerHTML = area;
}