const NumAleato = () => Math.round(Math.random() * (1000 - 1) + 1)

const retorna = () => {
    let array = []
    while (array.length < 2000) {
        array.push(NumAleato())
    }

    return array
}

let array = retorna()
//pegando os multiplos de 5
const reduzir = array.reduce((a, val) => {
    if (val % 5 === 0) a.push(val)
    return a
}, [])

/*------------------------------------------*/

const ob = [
    { nome: 'Rafael', idade: 15 },
    { nome: 'Lucas', idade: 21 },
    { nome: 'Ligia', idade: 24 },
    { nome: 'Samara', idade: 19 },
    { nome: 'Gustavo', idade: 7 },
    { nome: 'Cicero', idade: 42 }
]

// const rs = ob.reduce((acu, val) => {
//     if (acu.idade < val.idade)

//         return val.idade
// })
//Tentar pegar o menor valor usando o reduce
//console.log(rs)


const menor_idade = () => {
    let menor = ob[0].idade
    let resul;
    for (let i in ob) {
        let idade = ob[i].idade
        if (idade < menor) resul = ob[i]
    }
    return resul
}
console.log(menor_idade())