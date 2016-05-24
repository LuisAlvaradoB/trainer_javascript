//Las tijeras cortan el papel
//el papel cubre a la piedra
//la piedra aplasta al lagarto
//el lagarto envenena a Spock
//Spock destroza las tijeras
//las tijeras decapitan al lagarto
//el lagarto se come el papel
//el papel refuta a Spock
//Spock vaporiza la piedra,
//Piedra aplasta las tijeras.

//Genera un número aletario entre un rango de enteros
function aleatorio(minimo,maximo){
  var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}


var piedra  = 0;
var papel   = 1;
var tijera  = 2;
var lagarto = 3;
var spock   = 4;

var opciones = ["Piedra","Papel","Tijeras","Lagarto","Spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

 opcionUsuario =prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);
 alert("Elegiste " + opciones[opcionUsuario]);
 alert("javascript eligió " + opciones[opcionMaquina]);

 if (opcionUsuario == piedra) {
   if (opcionMaquina == piedra) {
     alert("Empate!");
   }
   else if (opcionMaquina == papel) {
     alert("Perdiste, papel envuelve a piedra!");
   }
   else if (opcionMaquina == tijera) {
     alert("Ganaste, piedra aplasta a tijeras!");
   }
   else if (opcionMaquina == lagarto) {
     alert("Ganaste, piedra aplasta a lagarto!");
   }
   else if (opcionMaquina == spock) {
     alert("Perdiste, Spock vaporiza a piedra!");
   }

 }
 else if (opcionUsuario == papel) {
   if (opcionMaquina == piedra) {
     alert("Ganaste, papel envuelve a piedra!");
   }
   else if (opcionMaquina == papel) {
     alert("Empate!");
   }
   else if (opcionMaquina == tijera) {
     alert("Perdiste, tijera corta a papel!");
   }
   else if (opcionMaquina == lagarto) {
     alert("Perdiste, lagarto devora a papel!");
   }
   else if (opcionMaquina == spock) {
     alert("Perdiste, papel desautoriza a Spock!");
   }
 }
 else if (opcionUsuario == tijera) {
   if (opcionMaquina == piedra) {
     alert("Perdiste, piedra aplasta a tijera!");
   }
   else if (opcionMaquina == papel) {
     alert("Ganaste, tijera corta a papel!");
   }
   else if (opcionMaquina == tijera) {
     alert("Empate!");
   }
   else if (opcionMaquina == lagarto) {
     alert("Ganaste, tijera decapita a lagarto!");
   }
   else if (opcionMaquina == spock) {
     alert("Perdiste, Spock rompe tijera!");
   }
 }
 else if (opcionUsuario == lagarto) {
   if (opcionMaquina == piedra) {
     alert("Perdiste, piedra aplasta a lagarto!");
   }
   else if (opcionMaquina == papel) {
     alert("Ganaste, lagarto se come el papel!");
   }
   else if (opcionMaquina == tijera) {
     alert("Perdiste, tijera decapita a lagarto!");
   }
   else if (opcionMaquina == lagarto) {
     alert("Empate!");
   }
   else if (opcionMaquina == spock) {
     alert("Ganaste, lagarto envenena a Spock!");
   }
 }
 else if (opcionUsuario == spock) {
   if (opcionMaquina == piedra) {
     alert("Ganaste, Spock vaporiza a piedra!");
   }
   else if (opcionMaquina == papel) {
     alert("Perdiste, papel desautoriza a Spock!");
   }
   else if (opcionMaquina == tijera) {
     alert("Ganaste, Spock rompe a tijera!");
   }
   else if (opcionMaquina == lagarto) {
     alert("Perdiste, lagarto envenena a Spock!");
   }
   else if (opcionMaquina == spock) {
     alert("Empate!");
   }
 }
 else {
   alert("Bazinga");
 }
