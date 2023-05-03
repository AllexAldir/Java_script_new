$('#teste01').on('click', function (e) {
    e.preventDefault()

    let href = $('#teste01').prop('href')
    //console.log(href)
    
    function ajax(ob) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.open(ob.methold, ob.url, true) //Aqui passa os parâmetros para requisição
            xhr.send() //Caso queira envair

            xhr.addEventListener('load', function () {
                if (xhr.status >= 200 && xhr.status <= 300) {
                    return resolve(xhr.status)
                }

                reject(new Error('erro na requisição'))
            })
        })
    }

    async function resultado() {
        await ajax({ methold: 'GET', url: href })
            .then(e => console.log(e))
            .catch(e => console.log(e))
    }

    resultado()
})


