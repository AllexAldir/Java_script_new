async function Pegadados() {
    let dado;
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(e => dado = e.json())
        .catch(e => console.log(`Erro na requisição ${e}`))
    console.log(dado);
}

/*---------------*/

async function Pgadados2() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users').then(e => e.json())
        .catch(e => console.log(`Erro no sistema ${e}`))
    return(result)
}

console.log(Pegadados())