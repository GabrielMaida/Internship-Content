"use strict";
// Understanding TypeScript
const pokemon = {
    pokedex_id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    message: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    height: 0.7,
    weight: 6.9
};
console.log('\nPokemon Data:\n', pokemon);
/////////////////////////////////////////
function sum(a, b) {
    let result = a + b;
    return result;
}
let result = sum(2, 5);
console.log('\nResult:', result, '-> type:', typeof result);
/////////////////////////////////////////
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log('\nActive Hobbies:', activeHobbies);
/////////////////////////////////////////
const person = {
    name: 'gabriel',
    age: 22
};
/*
const copiedPerson = person;
copiedPerson.name = 'pedro';
*/
const copiedPerson = Object.assign({}, person);
copiedPerson.name = 'pedro';
console.log('\n', copiedPerson);
console.log(person);
/////////////////////////////////////////
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(4.5, 10, 2.5, 3);
console.log('\nSum:', addedNumbers);
/////////////////////////////////////////
