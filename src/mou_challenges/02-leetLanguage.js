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
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', 
]

const leetAlphabet = [
    '4', 'I3', '[', 'I>', '3', 'I=', '&', 'I-I', '1',
    ',_i', 'i<', '|', '/VL', 'L/I', '0', 'I°', '(_,)',
    'I2', '5', '7', '(_)', 'L/', 'L/L/', '><', 'J', '2', ' ',
]

let myPhrase = 'Oscar'

const leetLanguage = ( phrase ) =>{
    if(regularAlphabet.length === leetAlphabet.length && //Valida que sean la misma cantidad de letras
        regularAlphabet[regularAlphabet.length - 1] === leetAlphabet[leetAlphabet.length - 1]){ //Valida que el ultimo caracter sea espacio
        console.log('Frase original: ', phrase)
        console.log('traduciendo ...');
        
        //1 Un string vacio que contendra el result
        //2 Un for que recorra la frase de usuario
        //3 Defino una variable de posicion en el alfabeto
        //4 Capturo la posición de esos caracteres en regularAlphabet
        //% sumo al resultado la posicion de las letras en el otro alfabeto
        let userPhrase = phrase.toLowerCase();
        let result = '';

        userPhrase = userPhrase.split('');
        for (const el of userPhrase) {
            let indexChar = regularAlphabet.indexOf(el);

            result += leetAlphabet[indexChar];
        }
        return result;
    } 
    else {
        console.log('Debes revisar la configuración de tu abecedario')
    }
}

console.log(leetLanguage(myPhrase));

