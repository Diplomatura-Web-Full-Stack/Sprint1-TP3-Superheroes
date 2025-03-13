import { agregarSuperheroes, leerSuperheroes } from './utils.mjs';

//leer y mostrar la lista de superheroes ordenada
const archivoOriginal = './superheroes.txt' ;
const archivoNuevos = './nuevosSuperheroes.txt';

//agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//ler y mostrar lista actualizada de superheroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superhéroes ordenados:');
console.log(superheroes);

