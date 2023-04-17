function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.formata = function () {
    this.nome = this.nome.replace(this.nome[0], this.nome[0].toUpperCase())
    return this
}

const ob = new Pessoa('samuel', 25)

//console.log(ob.formata())

const objeto_l = {
    nome: 'lucas',
    idade: 23
}

Object.setPrototypeOf(objeto_l, ob)

console.log(objeto_l.formata()) //Retorna um objeto com o nome ja formatado!