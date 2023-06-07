const pokeDetail = document.getElementById("poke-detail")

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function getCharacter() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await response.json()
    const character = new Pokemon(json.name, json.name, json.sprites.front_default, json.weight, json.height)

    pokeDetail.innerHTML = character.toHTMLdetail()
}

document.addEventListener("DOMContentLoaded", async () => {
    await getCharacter();
  
    const listFav = localStorage.getItem("listFav");
    if (listFav) {
      const listJson = JSON.parse(listFav);
      const currentPokemonName = id;
      const isInFavorites = listJson.some(pokemon => pokemon.name === currentPokemonName);
      let favText = document.getElementById("favText");
      favText.innerHTML = isInFavorites ? "Eliminar de favoritos" : "Añadir a favoritos";
    }
  });