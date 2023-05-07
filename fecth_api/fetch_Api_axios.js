$(window).on('load', function () {
    axios('../fecth_api/pessoas.json')
        .then(e => capta(e.data))

    function capta(response) {
        //console.log(response)
        response.forEach(e => {
            //console.log(e)

            $('#teste').append(`<tr><td>${e.nome}</td><td>${e.email}</td>
            <td>${e.salario}</td><td>${e.estado}</td><td>${e.idade}</td></tr>`)
        });
    }
})



