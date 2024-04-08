console.log("Vinculando esperate un cachito wn......");

function Usuario(){
    let nombreUsuario = prompt("Por favor ingrese su usuario ");
    let contraseña = prompt("Por favor ingrese su contraseña ");

    if (nombreUsuario === `usuario123` && contraseña === `secreto`){
        resultado = `Acceso concedido:D`;
    } else {
        resultado = `Acceso denegado:(`;
    }
    document.getElementById("lista").innerHTML = resultado;
}



