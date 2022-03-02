const salaryCol = colombia.map((person) => person.salary);
const salaryColSorted = salaryCol.sort((salaryA, salaryB) => salaryA - salaryB);

//helpers functions
function calculateAverage(arrayElements) {
    //Suma cada elemento del array y agrega el valor al acumulado
    const result = arrayElements.reduce((accumulated = 0, element) => accumulated + element);

    //Divide la suma de todos los elementos del array entre la cantidad de posiciones que este tiene.
    const average = result / arrayElements.length;
    //Retorna el valor del promedio
    return average;
}

//calcular mediana general
function calculateMedian(elements) {
    //obtiene la posición central del array
    let = medianPosition = parseInt(elements.length / 2);
    //Se evalua si el tamaño del array es par o impar
    if (elements.length % 2 === 0) {
        //Si el array es par
        //Obtiene las 2 posiciones centrales del array
        const element1 = elements[medianPosition - 1];
        const element2 = elements[medianPosition];
        //Clacula el promedio entre los elementos de las posiciones centrales
        const medianValue = calculateAverage([element1, element2,]);
        //Imprime el resutado en consola
        return medianValue;

    } else {
        //Si el array es impar
        //Obtiene el valor del elemento central del array
        let medianValue = elements[medianPosition];
        //Imprime el resutado en consola
        return medianValue;
    }
}

//calcular mediana top 10

function calculateMedianTop(elements, average) {
    const spliceStart = (elements.length * (100 - average) / 100);
    const spliceCount = elements.length - spliceStart;
    const salaryCoTop = elements.splice(spliceStart, spliceCount);
    return calculateMedian(salaryCoTop);
}



console.log(calculateMedianTop(salaryColSorted, 10));

