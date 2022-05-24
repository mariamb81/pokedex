import { formatData } from "./utilities";
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
    //format data here
    formatData(data);
    return {
        id: data.id,
        name: data.name,
        photo: data.sprites.other["official-artwork"].front_default,
        types: data.types,
        abilities: data.abilities,
        stats: data.stats,
        moves: data.moves
    }
}
export const getPokemonProms = async () => {
    const response = await P.getPokemonsList(interval);
    //object w pokemon name and url
    pokemonList = response.results;
    //request from API based on url
    return pokemonList.map((pokemon) => {
        return getDataByURL(pokemon.url);
    });
}
