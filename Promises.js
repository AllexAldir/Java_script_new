//Promisses entendendo um pouco

const RequisiCao = (id) => {
    fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(respose => {
            return respose.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(erro => {
            console.log(`Erro na requisição ${erro}`)
        })
}

RequisiCao(3)