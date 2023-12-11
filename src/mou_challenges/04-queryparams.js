/*
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */

const paramGetValues = (url) => {
    let halfUrl = url.split('=');
    firstParam = halfUrl[1].slice(0,4);
    lastParam = halfUrl[2];
    let params = [firstParam, lastParam];
    return params;
}

console.log(paramGetValues('https://retosdeprogramacion.com?year=2023&challenge=0'))