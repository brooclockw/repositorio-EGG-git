/*

function esPalindromoConFunciones(palabra){
    let invertida = palabra.split("").reverse().join("");
    
    return (invertida === palabra);
}

console.log(esPalindromo(lol));*/

function esPalindromoS(palabra){
    let letras = [];
    for (let i = 0; i < palabra.length; i++){
        letras.push(palabra[i]);
    }

    let letrasInvertidas = [];
    for (let i = letras.length - 1; i >= 0; i--) {
    letrasInvertidas.push(letras[i]);
    }

    let palabraInvertida = "";
    for (let i = 0; i < letrasInvertidas.length; i++){
        palabraInvertida += letrasInvertidas[i];
    }

    return (palabraInvertida === palabra)
}
console.log(esPalindromoS("OTTO")); 

/*
function fibonnacci(numero){
    let serie = [0, 1];

    for(let i = 2; i <= numero; i++){
        serie.push(serie[i -1] + serie[i - 2]);
    }

    return [serie, serie[numero]]
}*/

// fibonnacci(10)
// console.log("Resultado fib:", fibonnacci(15)[0])
// console.log("Resultado fib:", fibonnacci(15)[1])

// otra practica

/*
function invertir(texto) {
    let invertido = "";
    for(let letra of texto){
        invertido = letra + invertido
    }
    return invertido

}

console.log(invertir("merequetengue"))
*/


/*
function coincidencias(frase, busqueda){

    let texto_limpio = frase.toLowerCase().replace(/[!¡,+-.]/gi, "");
    let resultado = 0;

    if(texto_limpio.includes(busqueda)){

        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for(palabra of palabras){

            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda];

    }else[
        resutaldo = 0
    ]

    return resultado
}
console.log("Numero de coincidencias",
    coincidencias("soy una, frasesota. perro perro perro", "hola"));
*/


/*
function addTwo(numbers, result){

    for(let i = 0; i < numbers.length; i++){

        let firstNumber = numbers[i];
        let secondNumber = result - firstNumber;
    

        if(numbers.includes(secondNumber) && secondNumber != firstNumber){

            return [firstNumber, secondNumber]
        }
    }
    

}

console.log(addTwo([1, 2, 3, 4], 6))

*/
/*

const multiply = (a, b) =>{
    
    let resultado = 0
    const positivo = Math.abs(b) == b
    
    for (i = 0; i < Math.abs(b); i++) {

        resultado = positivo ? resultado + a : resultado - a
    }
    return resultado
}
const a = multiply(50, 2)
console.log(a)

*/