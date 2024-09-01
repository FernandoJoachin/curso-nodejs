const { HOME, SystemRoot, npm_lifecycle_script } = process.env;
console.table({ HOME, SystemRoot, npm_lifecycle_script });


const characters = ['Flash','Superman', 'Batman'];
const [ , , batman ] = characters;
console.log(batman);