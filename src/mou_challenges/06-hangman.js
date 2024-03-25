/*
 * Crea un pequeño juego que consista en adivinar palabras en un número máximo de intentos:
 * - El juego comienza proponiendo una palabra aleatoria incompleta
 *   - Por ejemplo "m_ur_d_v", y el número de intentos que le quedan
 * - El usuario puede introducir únicamente una letra o una palabra (de la misma longitud que
 *   la palabra a adivinar)
 *   - Si escribe una letra y acierta, se muestra esa letra en la palabra. Si falla, se resta
 *     uno al número de intentos
 *   - Si escribe una resolución y acierta, finaliza el juego, en caso contrario, se resta uno
 *     al número de intentos
 *   - Si el contador de intentos llega a 0, el jugador pierde
 * - La palabra debe ocultar de forma aleatoria letras, y nunca puede comenzar ocultando más del 60%
 * - Puedes utilizar las palabras que quieras y el número de intentos que consideres
 */

//console.log('Hi');

const hangman = (hiddenWord) => {
    try {
        //Pintando la palabra
        if(typeof hiddenWord != 'string' || hiddenWord.length < 2){
            throw new Error('Debe ser una palabra de más de 2 caracteres')
        }
        let secretWord = hiddenWord.split('');
        for(let i = 1; i < secretWord.length; i+=2){
            secretWord[i] = '_'
        }
        console.log(secretWord);
        let underWord = secretWord.join('');
        console.log(`La palabra secreta es ${underWord}`);
        console.log('Tienes 3 intentos');
        
        //Adivinando letras
        let intentos = 3;
    } catch (error) {
        console.log('Se produjo el siguiente error:', error.message)
    }
}

hangman('Calabozo');