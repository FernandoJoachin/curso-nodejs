import { httpClient } from '../plugins';

interface PokemonTypes {
  slot : number,
  type : {
    name : string,
    url : string
  }
}

interface Pokemon {
  id : string | number,
  name : string,
  types : string
}

export const getPokemonById = async (id : string | number) : Promise<Pokemon> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  const pokemon = await httpClient.get(url);

  return {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map((typeInfo : PokemonTypes) => typeInfo.type.name).join(', ')
  };
}
