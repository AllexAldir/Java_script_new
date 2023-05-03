const ajax = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true) //função get
        xhr.send() //Metodo de enviou post

        xhr.addEventListener('load', function () {
            if (xhr.status >= 200 && xhr.status <= 300) {
                resolve(xhr.responseText) //Retorna o valor da requisição

            } else {
                reject(xhr.statusText) //mostra o status da requisição
            }
        })
    })

}

$(document).ready(function () {
    $('#teste01').on('click', function (e) {
        e.preventDefault()
        const href = $('#teste01').prop('href') //Valor do href
        //console.log(href)

        ajax({ method: 'GET', url: href }).then(e => $('.contanier').html(e)).catch(e => console.log(e))

    })

    $('#teste02').on('click', function (e) {
        e.preventDefault()
        const href = $('#teste02').prop('href') //Valor do href 
        //console.log(href

        ajax({ method: 'GET', url: href }).then(e => $('.contanier').html(e)).catch(e => console.log(e))
    })
})

