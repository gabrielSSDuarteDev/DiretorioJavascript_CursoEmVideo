//Crie uma função chamada somarArray que recebe um array de números como argumento. A função deve retornar a soma de todos os elementos do array.

let numeros = [40, 40, 40, 40, 40, 40]

function somarArray(){
    let soma = 0
    for(let i = 0; i < numeros.length;i++){
        soma += numeros[i]
 
       } return soma
}

console.log(somarArray(numeros))
