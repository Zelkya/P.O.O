console.log("Vinculado correctamente")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
   
    // Tu código aquí
    let ahora = 2024;
    const fecha_nac = 2006;
    let Resultado = ahora - fecha_nac;
    alert("Tengo" +  Resultado);
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    
    // Tu código aquí
    let var1 = 24
    let var2 = 0
    let Resultado = var1 + var2;
    alert("El resultado es: " + Resultado);
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1' y 'num2', y 'num3' resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    
    // Tu código aquí
   let num1 = 5;
   let num2 = 9;
   let num3 = 7;
   let suma = num1 + num2 + num3;
   let resta = num1 - num3;
   let mult = num2 * num3;
   let div = num1 / 120;
alert("la suma es " + suma + "\n la resta es " + resta + "\n la multiplicación es " + mult + "\n la división es " + div);


    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'dirección' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje.
    function manipularCadenas() {

    // Tu código aquí
    let dirección = "San Damian";
    let n_casa = 8386;
    let complete = "La dirección es: " + dirección + " " + n_casa;
    let ante = [10];
    let longitud = complete.length;
    alert("La dirección es: " + complete + "\n la longitud es " + longitud + "\n y el antepenúltimo mensaje es: " + ante);
    
    }
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
