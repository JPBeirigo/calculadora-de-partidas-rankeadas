let rankedScore = rankedCalculator(45, 13)
let nivel

if(rankedScore<10){
    nivel = "Ferro"
} else if(rankedScore<21){
    nivel = "Bronze"
} else if(rankedScore<51){
    nivel = "Prata"
} else if(rankedScore<81){
    nivel = "Ouro"
} else if(rankedScore<91){
    nivel = "Lendário"
} else if(rankedScore>100){
    nivel = "Imortal"
}

console.log("O Herói tem um saldo de " + rankedScore + " está no nível de " + nivel)

function rankedCalculator(vitorias, derrotas){
    let rankedScore = vitorias - derrotas
    return rankedScore
}

