const fs = require('fs');
const content = fs.readFileSync('readme.md', 'utf-8');
const words = content.split(' ');
//const reactWordCount  = words.filter(word => word.toLowerCase().includes('react')).length;
const reactWordCount  = content.match(/reac/gi ?? []).length;
console.log('Palabras:', words.length);
console.log('Palabras React:', reactWordCount); 
