import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('js-foundation/06-promises.ts', () => {

    test('getPokemonById should return a pokemon', async () => {{
        const pokemonId = 612;
        const pokemon = await getPokemonById(pokemonId);

        expect(pokemon).toEqual({
            id: 612,
            name: 'haxorus',
            types: 'dragon'
        });
    }});

    test('should return an error if pokemon does not exist', async () => {{
        const pokemonId = 2000;
        try {
            await getPokemonById( pokemonId );
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${ pokemonId }`);
        }
        
    }});

});