"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { HOME, SystemRoot, npm_lifecycle_script } = process.env;
console.table({ HOME, SystemRoot, npm_lifecycle_script });
exports.characters = ['Flash', 'Superman', 'Batman'];
const [, , batman] = exports.characters;
console.log(batman);
