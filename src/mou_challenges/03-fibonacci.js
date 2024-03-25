/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const fibonacciGen = () => {
    const fibonacciArr = [];
    fibonacciArr.push(0);
    fibonacciArr.push(1);
    let nextNum;
    
    do {
        nextNum = fibonacciArr[fibonacciArr.length - 2] + fibonacciArr[fibonacciArr.length - 1];
        fibonacciArr.push(nextNum);
    } while (fibonacciArr.length <= 50);
    
    console.log({fibonacciArr});
}

console.log(fibonacciGen(-1));