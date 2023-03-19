const Pessoas = [
    { nome: 'állex' },
    { nome: 'lucas' },
    { nome: 'gabriel' },
    { nome: 'carlos' }
]

const Tranforma = (AR) => {

    for(let i in AR){
        AR[i].nome = AR[i].nome.toUpperCase()
    }

}

Tranforma(Pessoas)

console.log(Pessoas);