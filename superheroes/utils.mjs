import fs from 'fs';

//clase para representar un superheroe
class Superheroe{
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo){

        this.id=id;
        this.nombreSuperheroe=nombreSuperheroe;
        this.nombreReal=nombreReal;
        this.nombreSociedad=nombreSociedad;
        this.edad=edad;
        this.planetaOrigen=planetaOrigen;
        this.debilidad=debilidad;
        this.poder=poder;
        this.habilidadEspecial=habilidadEspecial;
        this.aliado=aliado;
        this.enemigo=enemigo;
    }
}

//funcion para leer y ordenar los superheroes
export function leerSuperheroes(ruta){
    const datos = fs.readFileSync(ruta,'utf8');
    const superheroesArray = JSON.parse(datos);

    //convertir a instancias de superheroe
    const superheroes=superheroesArray.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aaliado, hero.enemigo)
    );

    //ordenar por nombre de superheroes
    superheroes.sort((a,b) =>a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    
    return superheroes;

}

// NUEVA función para AGREGAR superhéroes
export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    // Leer los datos originales de superhéroes desde el archivo JSON
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');
  
    // Convertir los datos de texto a objetos JavaScript (parsear JSON)
    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);
  
    // Convertir los nuevos superhéroes a instancias de la clase Superheroe
    const instanciasNuevos = nuevosSuperheroes.map(
      hero => new Superheroe(
        hero.id, 
        hero.nombreSuperheroe, 
        hero.nombreReal, 
        hero.nombreSociedad, 
        hero.edad, 
        hero.planetaOrigen, 
        hero.debilidad, 
        hero.poder, 
        hero.habilidadEspecial, 
        hero.aliado, 
        hero.enemigo
      )
    );
  
    // Combinar las listas de superhéroes (originales + nuevos)
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];
  
    // Guardar la lista actualizada en el archivo original
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');
  
    console.log('Lista de superhéroes actualizada con éxito!');
  }
  

