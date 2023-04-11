//Utilizando o map
const nomes = ['Gabriel', 'Felipe', 'Ana', 'Marcos']

const tb_pessoa = [
    { nome: 'Lucas', idade: 25 },
    { nome: 'Lucas', idade: 25 },
    { nome: 'Lucas', idade: 25 },
    { nome: 'Lucas', idade: 25 }
]

const respots = tb_pessoa.map((e, i) => {
    if (e.nome == 'Lucas') e.nome = nomes[i]
    return e
})

console.log(respots);