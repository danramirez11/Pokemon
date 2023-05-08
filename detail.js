const pokeDetail = document.getElementById("poke-detail")

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function getCharacter() {
    
    for(let i = 0; i < pokemonList.length; i++){
        if(pokemonList[i].name === id){
            const json = await fetch(pokemonList[i].url).then(res => res.json());
            const character = new Pokemon(json.name, json.name, json.sprites.front_default, json.weight, json.height)
            pokeDetail.innerHTML = character.toHTMLdetail()
            console.log(Pokemon)

        }
    }
    
}

getCharacter()