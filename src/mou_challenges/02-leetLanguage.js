/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

const regularAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
]

const leetAlphabet = [
    '4', 'I3', '[', 'I)', '3', 'I=', '&', '#', '1',
    ',_i', 'i<', '1', 'jvi', 'I/I', '0', 'I°', '(_,)',
    'I2', '5', '7', '(_)', '\/', '\/\/', '><', 'J', '2', 
]

//let myPhrase = 'hola mundo'

const leetLanguage = () =>{
    if(regularAlphabet.length === leetAlphabet.length){
        console.log('Si son las mismas letras');
    }
}

leetLanguage();

