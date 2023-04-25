//Treino com metodos estaticos com classes

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    formata() {
        this.nome = this.nome.replace(this.nome[0], this.nome[0].toUpperCase())
    }

    static teste(x) {
        console.log(`teste: ${x}`)
    }
}

const pessoa = new Pessoa('lucas', 36)
pessoa.formata()
let nome = pessoa.nome
Pessoa.teste(nome)
console.log(pessoa)

/*----------------------------------------------------*/

class Carro {
    constructor(marca, modelo, preco) {
        this.marca = marca
        this.modelo = modelo
        this.preco = preco
    }

    aumenta(x) {
        this.preco = this.preco + (this.preco * (x / 100))
    }
}

const carro1 = new Carro('fiat', 'uno', 15000)
console.log(carro1)