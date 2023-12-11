/*
 * Crea una función que sea capaz de detectar si existe un viernes 13 en el mes y el año indicados.
 * - La función recibirá el mes y el año y retornará verdadero o falso.
 */

const isFriday13 = ( year, month ) => {
   const myDate = new Date( year, month -1, 13 );
   console.log(myDate);
   const whatDayis = myDate.getDay();
   
   switch (whatDayis) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('** FRIDAY **')
        break;
    case 6:
        console.log('Saturday')
        break;
   };

   if(whatDayis === 5){
    console.log(true)
   } else {
    console.log(false)
   }

}

isFriday13(2023, 10)
isFriday13(2023, 11)