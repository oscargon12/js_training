/*
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */

const paramGetValues = (param) => {
    let paramsArr = param.split('=');
    paramsArr.shift(0);
    let firstParam = paramsArr[0].slice(0, 4)
    paramsArr.shift(0);
    paramsArr.unshift(firstParam);
    return(paramsArr)
}

console.log(paramGetValues('https://retosdeprogramacion.com?year=2023&challenge=0'))