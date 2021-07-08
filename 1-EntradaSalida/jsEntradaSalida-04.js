/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	// guardo este espacio en memoria para guardar el nombre del usuario.

 let nombre;

 // guardo en la variable nombre el texto que escribió el usuario dentro de la ventana prompt.

 nombre = prompt("Ingrese su nombre");

 //copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto de la pag html.

 document.getElementById("txtIdNombre").value = nombre;

}

