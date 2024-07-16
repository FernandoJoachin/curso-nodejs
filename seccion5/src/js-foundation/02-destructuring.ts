const { HOME, SystemRoot, npm_lifecycle_script } = process.env;
console.table({ HOME, SystemRoot, npm_lifecycle_script });


export const characters = ['Flash','Superman', 'Batman'];
const [ , , batman ] = characters;
console.log(batman);