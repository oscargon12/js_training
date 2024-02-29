
/* Escribe una función que reciba dos palabras (String) y retorne
* verdadero o falso (Bool) según sean o no anagramas.
* - Un Anagrama consiste en formar una palabra reordenando TODAS
*   las letras de otra palabra inicial.
* - NO hace falta comprobar que ambas palabras existan.
* - Dos palabras exactamente iguales no son anagrama.
*/

const isAnagram = (word1, word2) =>{

    if(word1 == '' || typeof word1 != 'string' || word2 == '' || typeof word2 != 'string'){
        console.log('1 y 2 deben ser palabras');
    }

    if( word1 === word2 ){
        console.log('2 palabras iguales no son un anagrama');
    }

    arrWord1 = word1.split('').sort();
    arrWord2 = word2.split('').sort();

    joinWord1 = arrWord1.join('');
    joinWord2 = arrWord2.join('');

    console.log(joinWord1);
    console.log(joinWord2);

    if(joinWord1 == joinWord2){
        console.log('Las dos palabras son un anagrama');
    }
    
}

isAnagram('earth', 'heart');
