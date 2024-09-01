/**ARCHIVO 01 */
//const { emailTemplate } = require('./js-foundation/01-template');


/**ARCHIVO 02 */
//require('./js-foundation/02-destructuring');


/**ARCHIVO 03-04 */
//const { getUserById } = require('./js-foundation/03-callbacks');
/* const { getUserById } = require('./js-foundation/04-arrow');
const id = 2;
getUserById(id, function(error, user){
    if(error){
        throw new Error(error);
    }

    console.log(user);
}) */


/**ARCHIVO 05 */ 
/* const { buildMakePerson } = require('./js-foundation/05-factory');
const { getAge, getUUID } = require('./plugins');

const makePerson = buildMakePerson({getUUID, getAge });

const obj = { name: 'John', birthdate: '2002-11-07' };
const john = makePerson(obj);
console.log(john); */


/**ARCHIVO 06 */
const { getPokemonById } = require('./js-foundation/06-promises');

getPokemonById(780)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(392)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(395)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(9)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(466)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(534)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(758)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(473)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(715)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(282)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(15)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(248)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(491)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(376)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(887)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(861)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(716)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(612)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

getPokemonById(254)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.log(err))

const { buildLogger } = require('./plugins');
const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Opps. Algo salió mal');