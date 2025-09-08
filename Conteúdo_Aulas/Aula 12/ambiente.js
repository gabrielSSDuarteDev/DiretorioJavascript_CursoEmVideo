let idade = 70
if(idade < 18){
    console.log("O individuo é menor de idade")
    if(idade <= 17 && idade >= 12){
        console.log("O individuo é um adolescente")
    }else if(idade < 12){
        console.log("O individuo é uma criança")
    }
}else if(idade >= 18){
    console.log("O inviduo é maior de idade")
    if(idade >= 18 && idade < 65){
    console.log("O inviduo é um Adulto")
    }else{
        console.log("O inviduo é idoso")
    }
}