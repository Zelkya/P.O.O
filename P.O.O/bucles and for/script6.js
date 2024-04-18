function while1(){

let calificaciones = [];

for (let i = 0; i < 5; i++) {
  let calificacion = parseFloat(prompt("Ingrese una calificación"));
  calificaciones.push(calificacion);
}

let suma = 0;
for (let i = 0; i < calificaciones.length; i++) {
  suma += calificaciones[i];
}

let promedio = suma / calificaciones.length;

document.getElementById("resultado").innerHTML = `El promedio de las calificaciones es: ${promedio.toFixed(2)}`;
}