console.log("Wait a minute please!");

function Videojuego() {
  let puntuación = 0;
  let punt_ask = prompt("Por favor ingrese su puntuación");

  if (punt_ask >= 90) {
    puntuación = `Excelente <h2>${punt_ask}</h2>`;
  } else if (punt_ask  >= 70 && punt_ask  <=89) {
    puntuación = `Buen trabajo <h2>${punt_ask }</h2>`;
  } else if (punt_ask  <= 70) {
    puntuación = `Necesitas mejorar <h2>${punt_ask }</h2>`;
  }

  document.getElementById("lista").innerHTML = puntuación;
};


