function while1(){

let numeros = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Ingrese un número"));
  numeros.push(numero);
}

let mayor = Math.max(...numeros);

document.getElementById("resultado").innerHTML = `El número mayor es: ${mayor}`;
}