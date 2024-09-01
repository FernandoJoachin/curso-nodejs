const { http } = require('../plugins');

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  const pokemon = await http.get(url);

  return {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')
  };
}



module.exports = {
    getPokemonById
}