//Variáveis Data e Hora
let fonteData = new Date()
let hora = fonteData.getHours()
let dia = fonteData.getDate()
let minuto =  fonteData.getMinutes()
let mes = 1 + fonteData.getMonth()
let ano = fonteData.getFullYear()

console.log(`Agora são exatamente ${hora} Horas e ${minuto} minutos`)
console.log(`A data de Hoje é: ${dia}/${mes}/${ano}`)

if(hora > 5 && hora < 12){
   console.log("Bom Dia!!")
}
else if(hora >= 13 && hora <= 18){
   console.log("Boa Tarde")
}
else if(hora > 18 && hora <= 4){
   console.log("Boa noite!!")
}