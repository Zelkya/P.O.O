var global = "Global";
let local = "Local";
const constant = "Constante";

console.log("Variables: Global - " + global + " - Local: " + local + " - Constante: " + constant);

const Entero = 4;
const Decimal = 6.9;
const String = "miauu";
const Bool = true;
const Array = ["gato", "perro", "gallina"];
let Objeto = {
    Marca: "Toyota", 
    modelo: "Hilux", 
    Km: 25000
};
let Indefinida;
let Nula = null;
function sumar(){
    return 10 + 5;
};
console.log("Variables: \nEntero: " + Entero +
 "\nDecimal: " + Decimal + "\nString: " + String +
   "\nBool: " + Bool + "\nArreglo: " + Array + 
    "\nObjeto:" + JSON.stringify(Objeto) + "\nIndefinida: " + Indefinida +
       "\nNula: " + Nula + "\nResultado de Función: " + sumar())
console.log(
    sumar()
);
