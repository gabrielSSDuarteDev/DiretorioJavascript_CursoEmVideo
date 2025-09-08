let fonteData = new Date()
let diaSemana = fonteData.getDay()
let mes = fonteData.getMonth()
let dia = fonteData.getDate()
let ano = fonteData.getFullYear()


switch(mes){
    case 0 :
       mes = "janeiro"
        break;
    case 1 :
        mes = "Fevereiro";
        break;
    case 2 :
         mes = "Março"
        break;
    case 3 :
         mes = "Abril";
        break;
    case 4 :
        mes = "Maio"
        break;
    case 5 :
         mes = "Junho";
        break;
    case 6 :
         mes = "Julho";
        break;
    case 7 :
       mes = "Agosto";
        break;
    case 8 :
         mes = "Setembro";
        break;
    case 9 :
         mes = "Outubro";
        break;
    case 10 :
        mes = "Novembro";
        break;
    case 11 :
        mes = "Dezembro";
        break;
    
    default:
        console.log("Mes inválido")
}

switch(diaSemana){

    case 0: 
        diaSemana = "Domingo"
        break

     case 1: 
        diaSemana = "Segunda"
        break

     case 2: 
        diaSemana = "Terça"
        break


     case 3: 
        diaSemana = "Quarta"
        break

     case 4: 
        diaSemana = "Quinta"
        break

     case 5: 
        diaSemana = "Sexta"
        break


     case 6: 
        diaSemana = "Sabádo"
        break

     
}


//Bloco de listagem do Dia,tem a função de alocar ou retira um zero antes do valod do dia
let listaDia = [dia]
let filtroNumber = listaDia.filter(numeros => typeof numeros === 'number')
let quantidadeNumeros = filtroNumber.length
if(quantidadeNumeros <= 1) {
    dia = "0" + dia 
}


console.log(`Hoje é Dia ${dia} de ${mes} de ${ano}`)
console.log(`Estamos em um(a): ${diaSemana}`)