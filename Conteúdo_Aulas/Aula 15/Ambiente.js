let lista = [11,5,7,2,4,8,1,3,9,6,10] // o meu vetor
lista[7] = 2 // estou colocando o número 2 na sétima posição
lista.sort((a , b) => a - b) //estou ordenando os números em crescentes utilizando arrow functions 
lista.push(5) // estou incluindo elementos dentro da minha lista pelo lado de fora. Ele vai automáticamente pro final da Lista


console.log(`O vetor Lista tem ${lista.length} Elementos`) // Quantidade de itens na lista
for(let i in lista){//Só serve para objects e para arrays
    console.log(`Eles são: ${lista[i]}`)
}

console.log(`O elemento 10 está na posição: ${lista.indexOf(10)}`)
let pos = lista.indexOf(15)
if(pos == -1){
    console.log("O valor não foi encontrado")
}else{
    console.log(`O valor está na posição ${lista.indexOf(i)}`)
}
