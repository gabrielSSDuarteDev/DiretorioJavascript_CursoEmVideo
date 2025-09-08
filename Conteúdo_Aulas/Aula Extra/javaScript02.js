 //Escreva uma função chamada encontrarMaior que recebe um array de números.
 //  A função deve retornar o maior número presente no array.
 //  Assuma que o array não estará vazio.


function encontrarMaior(listaNum){

    //verificação de vazio
    if(listaNum.length === 0){
        return "Array Vazio!"
    }
    //variáveis
    listaNum.sort((a,b) => a - b)
    let maiorNumero = ""
    
    //laço de verificação por cada elemento do array
    for(let i = 0; i < listaNum.length; i++){
        maiorNumero = listaNum[i]
    }
        return `${maiorNumero}`
    }

let listaNum = [40,3,5,6,7,1,8,30]
console.log(encontrarMaior(listaNum))




