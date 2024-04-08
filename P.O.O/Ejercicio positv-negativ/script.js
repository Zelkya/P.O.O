console.log("Wait a minute please!");

function positivoNegativo() {
  let numero = 0;
  let numero_ask = prompt("Por favor ingrese su numero");

  if (numero_ask > 1) {
    numero = `el numero es positivo <h2>${numero_ask}</h2>`;
  } else if (numero_ask == 0) {
    numero = `El numero es igual a 0 <h2>${numero_ask}</h2>`;
  } else if (numero_ask < 0) {
    numero = `Este numero es negativo <h2>${numero_ask}</h2>`;
  }

  document.getElementById("lista").innerHTML = numero;
}