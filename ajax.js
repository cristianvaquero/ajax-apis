const APIURL = `https://pokeapi.co/api/v2/pokemon/`;
const pokeId = $('#pokemonId')

const renderData = (pokemon) => {
    const pokedex = $('#pokedex');
    pokedex.prepend(`
        <div class="card" style="width: 18rem;">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pokemon.name}</h5>
                <ul>
                    <li>Pokemon Id: ${pokemon.id}</li>
                    <li>Height: ${pokemon.height}</li>
                    <li>Weight: ${pokemon.weght}</li>
                </ul>
            </div>
        </div>
    `);
}

const getData = (valorIdPokemon) => {
    $.ajax({
        method: "GET",
        url: APIURL + `${valorIdPokemon}`,
        success: (respuesta) => {
            console.log(respuesta);
        renderData(respuesta);
        },
        error: () => {
            alert('Algo salio mal')
        }
    })
};

$('#renderPokemon').click ( () => {
    let valorIdPokemon = Number(pokeId[0].value);
    console.log(valorIdPokemon);

    if(Number.isInteger(valorIdPokemon) && valorIdPokemon > 0 && valorIdPokemon < 899){
        getData(valorIdPokemon);
    }
    else {
        alert('Coloca un numero entero entre 1 y 898')
    }
    
})
