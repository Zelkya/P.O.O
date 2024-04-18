function noNegative() {
  let array = []; // Initialize an empty array
  let N = parseInt(prompt("Ingrese su número por favor")); // Prompt the user to enter a number

  // Prompt the user N times to enter a number, and add each number to the array
  for (let i = 0; i < N; i++) {
    let num = parseInt(prompt("Ingrese numero positivo o negativo"));
    array.push(num);
  }

  let original = [...array]; // Create a copy of the original array

  // Iterate over the array, and replace any negative numbers with 0
  for (let i = 0; i < N; i++) {
    if (array[i] < 0) {
      array[i] = 0;
    }
  }

  // Display the original and modified arrays
  document.getElementById("elemnto").innerHTML = `Arreglo Original: ${original.join(", ")} <br> Nuevo Arreglo: ${array.join(", ")}`;
}
