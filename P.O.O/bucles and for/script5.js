function while1(){

let N = parseInt(prompt("Ingrese un número"));
let pares = [];

for (let i = 0; pares.length < N; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}

document.getElementById("resultado").innerHTML = `Los ${N} primeros números pares son: ${pares.join(", ")}`;
}