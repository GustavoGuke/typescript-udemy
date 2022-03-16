type Nota = number | boolean

function notas(nota:Nota){
    if(!nota){
        return"favor enviar uma nota do atendimento"
    }
    else if(nota > 5){
        return "Nota Máxima 5 favor reenviar sua nota"
    }
    else if(nota == 5){
        const notaRecebida = mn(nota) 
        return ` ${notaRecebida} Obrigado pela nota`
    }
    else if(nota <5 && nota >2){
        const notaRecebida = mn(nota) 
        return `${notaRecebida}obrigado por nos avaliar`
    }
    else {
        const notaRecebida = mn(nota) 
        return `${notaRecebida} Que pena não conseguimos te atender pedimos desculpas`
    }
}

function mn(nota:Nota){
    let star = ""
    for (var i = 0; i < nota; i++) {
        star += "*";
    }
    return star
}

let n =notas(5)
console.log(n)