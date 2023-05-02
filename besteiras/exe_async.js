function dados(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== "string") return reject(new Error('Erro ao exibir dados'))
            resolve(msg)
        }, 5000)
    })
}

async function resposta() {
    const teste = await dados('Hello World!')
        .then(e => { return e })
        .catch(e => console.log(e))

    setTimeout(() => {
        console.log(teste)
    }, 6000)
}

resposta()