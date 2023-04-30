//Exercitando metodos de promises

const num = () => Math.round(Math.random() * (10000 - 1000) + 1)

function dados(ms, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof ms !== "string") return reject(new Error('Erro na execução'))

            resolve(ms)
        }, tempo)
    })
}

const teste = [
    dados('teste 1', num()),
    dados(' 2', num()),
    dados('teste 3', num())
]

// Promise.race(teste)
//     .then(e => console.log(e))
//     .catch(e => console.log(e))

function tested() {
    const flag = true

    if (flag) return Promise.resolve(dados('testeeee', num()))

    return Promise.reject(false)
}

tested()
    .then(e => console.log(e))
    .catch(e => console.log(e))