 //Escreva uma função chamada encontrarMaior que recebe um array de números.
 //  A função deve retornar o maior número presente no array.
 //  Assuma que o array não estará vazio.


function encontrarMaior(){

    if(listaNum.length === 0 ){
        return 'Array Vazio'
    }

    let maiorNumero = listaNum[0]

    for(let i = 0; i < listaNum.length; i++ ){
        if(listaNum[i] > maiorNumero){
            maiorNumero = listaNum[i]
        }
    }
        return `O maior número da Lista é: ${maiorNumero}`

}

let listaNum = [10, 8, 9, 2 ,7 ,3]
console.log(encontrarMaior(listaNum))