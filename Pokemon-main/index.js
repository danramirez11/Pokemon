objList = []
const container = document.getElementById('pokemonContainer');

async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    const pokemonList = data.results;

    //acá agarro el json del api y los vuelvo como un objeto de personaje
    for(let i = 0; i < pokemonList.length; i++) {
        //const obj = pokemonList[i]
        const pokemonData = await fetch(pokemonList[i].url).then(res => res.json());
        const pokemon = new Pokemon(pokemonData.id, pokemonData.name, pokemonData.sprites.front_default,
          pokemonData.weight, pokemonData.height)
        //y los meto a la list
        objList.push(pokemon)
    }

    // Render de los elementos ;; agarro la lista con los personajes y los vuelvo html y los meto al div
    for(let i = 0; i < objList.length; i++) {
        const character = objList[i]
        container.innerHTML += character.toHtml(i)
    }

  }

  getPokemon();

  function selected(pos) {
    const character = objList[pos];
    window.location.href = `./detail.html?id=${character.name}`
}