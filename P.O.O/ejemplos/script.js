console.log("Vinculando esperate un cachito wn......");

function IdentificarCualEsMayor() {
    let resultado = "";

    let numb = prompt("Por favor ingrese su numero mae: ");
    let num2 = prompt("Ingrese su segundo numero");

    if (numb >= num2) {
        resultado = `El primer numero es mayor - tiene: <h2>${numb}</h2>`;
    } else {
        resultado = `el segundo numero es mayor - tiene: <h2>${num2}</h2>`;
    }
    document.getElementById("lista").innerHTML = resultado;
}



