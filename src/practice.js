//1. Un programa que capture un numero de 4 digitos y lo imprima en pantalla en reverso

let userNum = prompt('Ingresa un numero de 4 digitos');
let userResult = document.querySelector('#result');
console.log(userNum);

const reverseNum = (number) => {

    try{
        if(number.length < 4 || number.length > 4){
            userResult.innerHTML = `<small class="text-danger mb-0"> El numero debe tener más de 4 digitos </small>`;
            throw new Error('El numero debe ser de 4 digitos');
        }
        let splitNum = number.split('');
        const reverseNumsArr = splitNum.reverse();
        let reversejoin = reverseNumsArr.join('');
    
        userResult.innerHTML = `<p class="mb-0"> ${reversejoin} </p>`;
    }
    catch(error){
        console.log(`Se produjo el siguiente error ${error}`)
    }
}

reverseNum(userNum);