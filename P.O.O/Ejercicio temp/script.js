console.log("Wait a minute please!");

function temperaturas() {
 let temp = 0;
  let temp_ask = prompt("Por favor ingrese su temperatura actual");
 
  if (temp_ask < 0) {
    temp = `Hace frío wachito <h2>${temp_ask}</h2>`;
  } else if (temp_ask >= 0 && temp_ask <= 25) {
    temp = `La temperatura es agradable <h2>${temp_ask}</h2>`;
  } else if (temp_ask > 25) {
    temp = `Hace calor <h2>${temp_ask}</h2>`;
  }

  document.getElementById("lista").innerHTML = temp;
};


