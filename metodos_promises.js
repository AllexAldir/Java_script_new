const num = () => Math.round(Math.random() * (10000 - 1000) + 1)

function espera(ms, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof ms !== 'string') return reject(new Error('Teste de erro'))
        //Espera uma promessa (resolve executa o dado certo)
        //reject se occorer algum erro 

        setTimeout(() => {
            resolve(ms) //retorna a mensagem
        }, tempo)
    })

}

// espera('Teste agora', 4000)
//     .then(e => {
//         console.log(e)
//         return espera('Teste segundo', 4000) //retorna a segundo resposta e cai no segundo then
//     })
//     .then(e => {
//         console.log(e)
//         //return e
//     })

// Promise.all Promise.race Promise.resolve Promise.reject

//Promise.all: 
const promise = [
    //'Inicio',
    espera('Primeiro Valor', 4000),
    espera('Primeiro Segundo', 7000),
    espera('Primeiro Terceiro', 1000),
    //espera(100, 1000),
    //'Ultimo valor'
]

// Promise.all(promise) //Resolve Todas a promessas e retorna em um array
//     .then(e => console.log(e))
//     .catch(e => console.log(e))



//Promise.race:

// Promise.race(promise) //Retorna a primeira promise resolvida
//     .then(e => console.log(e))
//     .catch(e => console.log(e))

//Promise.resolve:

function paginacache() {
    const flag = false

    if (flag) {
        return Promise.resolve('Ok página está em cache') //Retorna um promise ja resolvida
    }
    else { 
        return espera('Baixanodo a página', 4000) 
        //return 'Erro'
}
}

paginacache()
    .then(e => console.log(e))
    .catch(e => console.log(e))

//Promise.reject:
