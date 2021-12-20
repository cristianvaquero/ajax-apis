const APIURL = `https://pokeapi.co/api/v2/pokemon/`;
const pokeId = $('pokemonId')

const renderData = (pokemon) => {
    const pokedex = $('#pokedex');
    pokedex.prepend(`
        <div class="card" style="width: 18rem;">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
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

        }
    })
};

// $(document).ready(function(){
//     getData();
// });

$('#renderPokemon').click( () => {
    let valorIdPokemon = pokeId[0].value;
    console.log(valorIdPokemon)
    getData(valorIdPokemon);
})





