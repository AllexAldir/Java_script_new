function teste(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
            reject(new Error('erro'))
        }, 5000)
    })
}

async function dados() {
    await teste('ok')
        .then(e => console.log(e))
        .catch(e => console.log(e))

    await teste('Segundo')
        .then(e => console.log(e))
        .catch(e => console.log(e))
}

dados()

