$(window).on('load', function () {
    axios('../fecth_api/pessoas.json')
        .then(e => capta(e.data))

    function capta(response) {
        //console.log(response)
        response.forEach(e => {
            //console.log(e)
            $('.teste').append(`<tr><td>${e.cpf}</td><td>${e.email}</td>
            <td>${e.empresa}</td><td>${e.estado}</td><td>${e.nome}</td>
            <td>${e.salario}</td><td>${e.idade}</td><td>${e.sexo}</td></tr>`)
            
        });
    }
})



