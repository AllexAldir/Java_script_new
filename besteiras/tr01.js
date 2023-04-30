const fala = () => 'ok'



function pro() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve(fala())
            reject(new Error('Erro no sitema'))
        }, 5000)
    }))

}

pro().then(e => console.log(e)).catch(e => console.log(e))
