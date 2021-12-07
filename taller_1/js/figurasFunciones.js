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
    const value = parseFloat(input.value);
    const perimeter = squarePerimeter(value);
    const result = document.getElementById("squarePerimeterResult");
    result.innerHTML = perimeter;
}

function calculateSquareArea() {
    const input = document.getElementById("inputSquare");
    const value = parseFloat(input.value);
    const area = squareArea(value);
    const result = document.getElementById("squareAreaResult");
    result.innerHTML = area;
}

function calculateTrianglePerimeter() {
    const inputL1 = document.getElementById("inputTriangleL1");
    const inputL2 = document.getElementById("inputTriangleL2");
    const inputBase = document.getElementById("inputTriangleBase");
    const valueL1 = parseFloat(inputL1.value);
    const valueL2 = parseFloat(inputL2.value);
    const valueBase = parseFloat(inputBase.value);
    const perimeter = trianglePerimeter(valueL1, valueL2, valueBase);
    const result = document.getElementById("TrianglePerimeterResult");
    result.innerHTML = perimeter;
}

function calculateTriangleArea() {
    const inputL1 = document.getElementById("inputTriangleL1");
    const inputL2 = document.getElementById("inputTriangleL2");
    const inputBase = document.getElementById("inputTriangleBase");
    const valueL1 = parseFloat(inputL1.value);
    const valueL2 = parseFloat(inputL2.value);
    const valueBase = parseFloat(inputBase.value);
    const area = triangleArea1(valueL1, valueL2, valueBase);
    const result = document.getElementById("TriangleAreaResult");
    result.innerHTML = area;
}

function calculateCirclePerimeter() {
    const input = document.getElementById("inputCircle");
    const value = parseFloat(input.value);
    const perimeter = circlePerimeter(value);
    const result = document.getElementById("CirclePerimeterResult");
    result.innerHTML = perimeter;
}

function calculateCircleArea() {
    const input = document.getElementById("inputCircle");
    const value = parseFloat(input.value);
    const area = circleArea(value);
    const result = document.getElementById("CircleAreaResult");
    result.innerHTML = area;
}
