//new object -> object.prototype

const ob01 = {
    chaveA: 'A'
    // __proto__ : Object.prototype
}

const ob02 = {
    chaveB: 'B'
    // __proto__ : ob01

}

const ob03 = {
    chaveC: 'C'
    // __proto__ : ob02

}

Object.setPrototypeOf(ob02, ob01)
Object.setPrototypeOf(ob03, ob02)

//console.log(Object.getPrototypeOf(ob03))

/*----------------------------------------------*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function (x) {
    return produto.preco = produto.preco - (produto.preco * (x / 100))
}

Produto.prototype.aumento = function (x) {
    return this.preco = this.preco + (this.preco * (x / 100))
}


const produto = new Produto('camisa', 25)

//console.log(produto.aumento(10))


/*-------------------------------------------------*/

//reaproveitando o prototype do objeto Produto

const obteste = {
    nome: 'caneca',
    preco: 10
}

Object.setPrototypeOf(obteste, produto)
obteste.preco = obteste.aumento(10) //O valor desse objeto será alterado para o que retorna de valor desse metodo de prototype
console.log(obteste)