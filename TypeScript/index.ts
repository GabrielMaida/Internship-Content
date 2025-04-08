type Pokemon = {
    pokedex_id: number,
    name: string,
    type: string,
    message: string,
    height: number,
    weight: number
}

const pokemon1: Pokemon =  {
    pokedex_id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    message: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    height: 0.7,
    weight: 6.9
}

console.log(pokemon1);