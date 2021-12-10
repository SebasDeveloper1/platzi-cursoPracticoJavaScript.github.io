const base = [300, 100, 700, 500, 200, 400, 600, 900, 800, 1000]; //Array de prueba

function calculateAverage(arrayElements) {
    //Suma cada elemento del array y agrega el valor al acumulado
    const result = arrayElements.reduce((accumulated = 0, element) => accumulated + element);

    //Divide la suma de todos los elementos del array entre la cantidad de posiciones que este tiene.
    const average = result / arrayElements.length;
    //Retorna el valor del promedio
    return average;
}

function calculateMedian(arrayElements) {
    //Toma el array original y lo oridena de manera acendente
    let elements = arrayElements.sort(function (a, b) {
        return a - b;
    });
    //obtiene la posición central del array
    let = medianPosition = parseInt(elements.length / 2);
    //Se evalua si el tamaño del array es par o impar
    if (elements.length % 2 === 0) {
        //Si el array es par
        //Obtiene las 2 posiciones centrales del array
        const element1 = elements[medianPosition - 1];
        const element2 = elements[medianPosition];
        const valuesElements = [element1, element2,];
        //Clacula el promedio entre los elementos de las posiciones centrales
        const medianValue = calculateAverage(valuesElements);
        //Imprime el resutado en consola
        return medianValue;

    } else {
        //Si el array es impar
        //Obtiene el valor del elemento central del array
        let medianValue = arrayElements[medianPosition];
        //Imprime el resutado en consola
        return medianValue;
    }
}

const baseArray = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1,]; //Array de prueba

function calculateFashion(arrayElements) {
    const arrayElementsCount = {};
    arrayElements.map(
        function (element) {
            if (arrayElementsCount[element]) {
                arrayElementsCount[element] += 1;
            } else {
                arrayElementsCount[element] = 1;
            }
        }
    );
    console.log(arrayElementsCount);
    const newArray = Object.entries(arrayElementsCount).sort(function (accumulatedValue, newValue) {
        return accumulatedValue[1] - newValue[1];
    });
    const Fashion = newArray[newArray.length - 1];
    return `La moda es: ${Fashion[0]} que aparecio ${Fashion[1]} veces`;
}

const elementsArray = [0.72, 1.6, 0.9, 2];

function calculateGeometricMean(arrayElements) {
    const valueElements = arrayElements.reduce((accumulated = 0, element) => accumulated * element);
    const geometricMean = Math.pow(valueElements, 1 / arrayElements.length);
    return geometricMean;
}

function calculateArithmeticAverage() {
    let finalArray = [];

    const inputAverage = document.getElementById("inputArithmeticAverage");
    const inputAverageValue = inputAverage.value;
    const arrayElements = inputAverageValue.split(",");

    arrayElements.forEach((element) => {
        finalArray.push(Number(element))
    });
    arrayElements.push(finalArray);

    const result = calculateAverage(finalArray);

    const averageResult = document.getElementById("arithmeticAverageResult");
    averageResult.innerHTML = result;

}

function calculateGeometricMeanClick() {
    let finalArray = [];

    const inputGeometricMean = document.getElementById("inputGeometricMean");
    const inputGeometricMeanValue = inputGeometricMean.value;
    const arrayElements = inputGeometricMeanValue.split(",");

    arrayElements.forEach((element) => {
        finalArray.push(Number(element))
    });
    arrayElements.push(finalArray);

    const result = calculateGeometricMean(finalArray);

    const geometricMeanResult = document.getElementById("geometricMeanAverageResult");
    geometricMeanResult.innerHTML = result;

}

function calculateMedianClick() {
    let finalArray = [];

    const inputMedian = document.getElementById("inputMedian");
    const inputMedianValue = inputMedian.value;
    const arrayElements = inputMedianValue.split(",");

    arrayElements.forEach((element) => {
        finalArray.push(Number(element))
    });
    arrayElements.push(finalArray);

    const result = calculateMedian(finalArray);

    const medianResult = document.getElementById("medianResult");
    medianResult.innerHTML = result;

}


function calculateFashionClick() {
    let finalArray = [];

    const inputFashion = document.getElementById("inputFashion");
    const inputFashionValue = inputFashion.value;
    const arrayElements = inputFashionValue.split(",");

    arrayElements.forEach((element) => {
        finalArray.push(Number(element))
    });
    arrayElements.push(finalArray);

    const result = calculateFashion(finalArray);

    const fashionResult = document.getElementById("fashionResult");
    fashionResult.innerHTML = result;

}
