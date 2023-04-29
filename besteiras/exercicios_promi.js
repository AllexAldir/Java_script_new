const num = () => Math.round(Math.random() * (10 - 1) + 1)

//executando uma promise
function dados(call) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(call())
            reject(new Error())
        }, 5000)
    })
}

dados(num)
    .then(e => console.log(e))
    .catch(e => console.log(e))