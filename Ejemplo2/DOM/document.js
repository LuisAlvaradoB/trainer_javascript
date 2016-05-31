/*DOCUMENT OBJECT MODEL
OBJETOS
VARIABLES
FUNCIONES */

/*
document.write("Hola mamá!");
var pi = 3.141592654;
pi = Math.floor(pi);
document.write(pi);
*/


function Pokemon(nombrePokemon,vidaPoke,ataPoke)
{
  var estructuraPokemon
  {
    nombre:nombrePokemon,
    vida: vidaPoke,
    ataque: ataPoke
  };
  return estructuraPokemon;
};

var pikachu=pokemon("Pikachu",100,55);
var bulbasaur=pokemon("Bulbasaur",90,50);

console.log(bulbasaur);
