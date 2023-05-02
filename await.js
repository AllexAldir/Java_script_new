//Utiulizando os callbacks

//Exercitando metodos de promises

const num = () => Math.round(Math.random() * (10000 - 1000) + 1)

function dados(ms, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof ms !== "string") return reject(new Error('Erro na execução'))

            resolve(ms + ' ' + tempo)
        }, tempo)
    })
}

// dados('Fase 1', num()) //Exemplo de callback com promises
//     .then(e => {
//         console.log(e)
//         return dados('Fase 2', num())
//     })
//     .then(e => {
//         console.log(e)
//         return dados('Fase 3', num())
//     })
//     .then(e => {
//         console.log(e)
//     })
//     .catch(e => {
//         console.log(e)
//     })

/*-------------------------------------------------------*/
//trabalhando com async e await

async function executa() {
    await dados('Fase 1', num())
        .then(e => console.log(e))
        .catch(e => console.log(e))
    //console.log(fase1)
    await dados('Fase 2', num())
        .then(e => console.log(e))
        .catch(e => console.log(e))
    // const fase3 = await dados('Fase 3', num())
    // console.log(fase3)

}

executa()

//3 estagios de uma promise:

//Pending => pendente
//Fullfilled => Resolvida
//Reject => Rejeitada