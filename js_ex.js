//Colocando em prática treino de arrow functions!

// let nome = prompt('Digite seu nome aqui: ')

const valid = (x) => x.toUpperCase() 

let ob = [
    {produto:'toalha', valor:35},
    {produto:'bola', valor:12},
    {produto:'mouse',valor:45},
]

const maior_20 = ob.filter((preco) => {
    preco.valor > 10
})

console.log(maior_20)