/*
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs: 
 * https://github.com/public-apis/public-apis
 */

const RMApi = () => {
    for(let i = 0; i <= 4; i++){
        let url = `https://rickandmortyapi.com/api/character/${i}`;

        //fetch
        fetch(url)
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err));
    }
}

RMApi();

/* for(let i = 1; i <= 9; i++){
    let url = `https://rickandmortyapi.com/api/character/${i}`;

    //fetch
    fetch(url)
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
} */