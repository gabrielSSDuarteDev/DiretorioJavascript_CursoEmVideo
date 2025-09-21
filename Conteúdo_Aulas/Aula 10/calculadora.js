/*ínicio de Código - Declaração de Variáveis e valores dos inputs */
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const res = document.getElementById('res')


/* função geral para calcular todas as operações*/
function calcular(oparator){

const n1 = Number(num1.value)
const n2 = Number(num2.value)



//Validação de Erros para preenchimento dos campos e números válidos 
if(isNaN(n1) || isNaN(n2)){
    alert('Por favor, digite um número válido!') 
    return;
}


/* estrutura switch para definir o sinal da operação que ao ser clicada no botao aciona o listerner*/
switch(oparator){
    case '+':
        resultado = n1 + n2 
        break;
    case '-':
        resultado = n1 - n2
        break;
    case '*':
        resultado = n1 * n2
        break;
    case '/':
        resultado = n1 / n2
        break;

    case '/':
        if(n2 == 0){
            alert('Não é possível dividir por zero!')
            return;
        }
    default:
        alert('Operação inválida!')
        return;
}

res.innerHTML = `O resultado da operação é: <strong>${resultado}</strong>`

}


//listerners para cada botão de operação
document.getElementById('btnSoma').addEventListener('click', function(){
    calcular('+')
})

document.getElementById('btnSubtrair').addEventListener('click', function(){
    calcular('-')
})

document.getElementById('btnMultiplicar').addEventListener('click', function(){
    calcular('*')
})
document.getElementById('btnDividir').addEventListener('click', function(){
    calcular('/')
})












