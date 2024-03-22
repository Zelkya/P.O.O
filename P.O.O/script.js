function operandoMetodos(){
    const Array = [1,43,25,47,543,76,3,2,87,34];
    alert("Anterior: " + Array);
    let removeArray = Array.pop();
    Array.push(32);
    let remove2Array = Array.shift();
    Array.unshift(24);
    let Array2 = Array.reverse();
    console.log("ahora " + Array2);
    sumArray = Array2.reduce((valorAnterior, valorActual) =>{
        return valorAnterior + valorActual
    }, 0);
    alert("Numero primera posicion eliminado: " + remove2Array + "\n Numero ultima posicion eliminado: " + removeArray + "\n Resultado final: " + Array2 + "\n Suma Array: " + sumArray);
  }

  function modificarMensaje() {
    let messageold = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    let messagenew = ["Somos", "nosotros", "todos", "los", "estudiantes", "de", "programación", "los", "mejores", "del mundo"];
  
    let messagedelete = [];
  
    while (messageold.length > 0) {
      messagedelete.push(messageold.pop());
    }
  
    messagedelete.reverse();

    while (messagenew.length > 0){
        messageold.unshift(messagenew.shift());
    }

    alert("Los datos antiguos eran: " + messagedelete + "\n Y los nuevos datos son: " + messageold);
  }