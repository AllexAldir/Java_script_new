//Usando filter

let array = [5, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27]

let arra_res = []

for (let i of array) {
    if (i > 10) arra_res.push(i)
}
//como funciona o metodo filter
//console.log(arra_res)

/*--------------------------------------------*/

//Utilizando o filter
console.log(array.filter(e => e > 10)) //colocando em um arow function (retorna uma array filtrada)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

let letras_5 = pessoas.filter(e => e.nome.length >= 5)
let idade_50 = pessoas.filter(e => e.idade > 50)
let nome_a = pessoas.filter(e => e.nome.endsWith('a'))
console.log(nome_a)