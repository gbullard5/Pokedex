import { writable, derived } from "svelte/store";

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const pokemonList = writable([]);
const total = writable(0)
const term = writable('');

const fetchPokemon = async () => {
    const response = await fetch(url);
    const {results} = await response.json();

    pokemonList.set(results);
}

fetchPokemon();

const filtered = derived(
    [pokemonList,term],
    ([$pokemonList, $term]) => {
        const results = $pokemonList.filter((pokemon) => pokemon.name.includes($term));
        total.set(results.length)
        return results
    }
)

export{
    term,
    filtered,
    total,
}