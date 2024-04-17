function noNegative() {
  let array = [];
  let N = parseInt(prompt("Ingrese su número por favor"));

  for (let i = 0; i < N; i++) {
    let num = parseInt(prompt("Ingrese numero positivo o negativo"));
    array.push(num);
  }

  let original = [...array];

  for (let i = 0; i < N; i++) {
    if (array[i] < 0) {
      array[i] = 0;
    }
  }

  document.getElementById("elemnto").innerHTML = `Arreglo Original: ${original.join(", ")} <br> Nuevo Arreglo: ${array.join(", ")}`;
}
