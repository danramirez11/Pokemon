

async function addToFavorites(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const json = await response.json();
    const character = new Pokemon(json.id, json.name, json.sprites.front_default, json.weight, json.height);
  
    let listFav = localStorage.getItem("listFav");
    let favText = document.getElementById("favText")
    if (listFav === null) {
      listFav = [character];
      const listStr = JSON.stringify(listFav);
      localStorage.setItem("listFav", listStr);
      favText.innerHTML = "Eliminar de favoritos"
    } else {
      let listJson = JSON.parse(listFav);
      let pokeFavList = [];
      let isInFavorites = false;
      for (let i = 0; i < listJson.length; i++) {
        const obj = listJson[i];
        const objPoke = new Pokemon(obj.id, obj.name, obj.image, obj.weight, obj.height);
        if (obj.name === character.name) {
          isInFavorites = true;
      } else {
          pokeFavList.push(objPoke);
      }
      }

      if (isInFavorites) {
        const listStr = JSON.stringify(pokeFavList);
        localStorage.setItem("listFav", listStr);
        favText.innerHTML = "Añadir a favoritos";
    } else {
        pokeFavList.push(character);
        const listStr = JSON.stringify(pokeFavList);
        localStorage.setItem("listFav", listStr);
        favText.innerHTML = "Eliminar de favoritos";
    }
    }
  }