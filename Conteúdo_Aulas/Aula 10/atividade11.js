


function somar(){
    let lin1 = document.querySelector('input#num1')
    let lin2 = document.querySelector('input#num2')
    let val1 = Number(lin1.value)
    let val2 = Number(lin2.value)
    let res = document.querySelector('div#res')
    let op  = val1 + val2
    res.innerHTML = `O Resultado da operação é: ${op}`
    
}


function subtrair(){
     let lin1 = document.querySelector('input#num1')
    let lin2 = document.querySelector('input#num2')
    let res = document.querySelector('div#res')
    let val1 = Number(lin1.value)
    let val2 = Number(lin2.value)
    let op  = val1 - val2
    res.innerHTML = `O Resultado da operação é: ${op}`
    
}

function multiplicar(){
     let lin1 = document.querySelector('input#num1')
    let lin2 = document.querySelector('input#num2')
    let res = document.querySelector('div#res')
    let val1 = Number(lin1.value)
    let val2 = Number(lin2.value)
    let op  = val1 * val2
    res.innerHTML = `O Resultado da operação é: ${op}`
    
}

function dividir(){
     let lin1 = document.querySelector('input#num1')
    let lin2 = document.querySelector('input#num2')
    let res = document.querySelector('div#res')
    let val1 = Number(lin1.value)
    let val2 = Number(lin2.value)
    let op  = val1 / val2
    res.innerHTML = `O Resultado da operação é: ${op}`
    
}