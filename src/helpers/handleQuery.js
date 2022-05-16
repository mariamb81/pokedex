const Pokedex = require("pokeapi-js-wrapper");

const customOptions = {
    protocol: "https",
    hostName: "localhost:443",
    versionPath: "/api/v2/",
    cache: true,
    timeout: 5 * 1000, // 5s
    cacheImages: true
}
const P = new Pokedex.Pokedex();
const interval = {
    offset: 0,
    limit: 10000,
}

let pokemonList = [];

const getDataByURL = async (url) => {
    const path = url.slice(19);
    const data = await P.resource(`${path}`);
    const newPokemonData = 
    {
        id: data.id,
        name: data.name,
        formatted_name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        photo: data.sprites.other["official-artwork"].front_default,
        types: data.types,
        abilities: data.abilities,
        stats: data.stats
    }
    return newPokemonData;
}

export const getPokemonProm = async () => {
    const response = await P.getPokemonsList(interval);
    pokemonList = response.results;
    // console.log(pokemonList);
    return pokemonList.map((pokemon) => {
        return getDataByURL(pokemon.url);
    });
}


export const getDataByName = (name, list) => {
    const myNewList = list.filter(
        pokemon => pokemon.name.includes(name)
    );
    return myNewList;
}
