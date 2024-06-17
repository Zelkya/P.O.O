function ActivadoDesactivado(elemento){
    console.log("elemento clickeado", elemento);
    elemento.style.backgroundColor = 'green'; // Cambia el color de fondo del botón
    elemento.textContent = 'activado'; // Cambia el texto del botón

    elemento.style.backgroundColor = 'red'; // Cambia el color de fondo del botón
    elemento.innerText = 'desactivado'; // Cambia el texto del botón
}
