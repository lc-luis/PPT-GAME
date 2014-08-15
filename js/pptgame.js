//PPTLS - JUEGO

//Creamos variables globales
var jugadaUsuario;
var jugadaMaquina;

//Generar numero aleatorio para la maquina.
//Floor redondea y devuelve un entero.
function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;	
}

//Selecciona una opcion y empieza a jugar.
function jugar(opcionesId)
{
	//Generamos un array con las opciones.
	var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

	//Obtenemos opcion Usuario en texto
	jugadaUsuario = opciones[opcionesId];

	//Obtenemos numero aleatorio
	var opcionMaquina = aleatorio(0,4);

	//Obtenemos opcion Maquina en texto
	jugadaMaquina = opciones[opcionMaquina];

	//Obtenemos la jugada y la mostramos en el div con id jugada
	var jugada = document.getElementById("jugada").innerHTML = "Tu juegas " + jugadaUsuario + " <img src='img/" + jugadaUsuario + ".png' title='" + jugadaUsuario + "'> contra <img src='img/" + jugadaMaquina + ".png' title='" + jugadaMaquina + "'>" + jugadaMaquina + ".";

	//mostramos el boton start
	document.getElementById("resultado").style.display='block';
}

//Resultado Final
function resultado()
{
	//Ocultamos el boton start al hacer click 
	document.getElementById("botonStart").style.display='none';
}

