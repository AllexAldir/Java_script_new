class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    formataNome() {
        this.nome = this.nome.replace(this.nome[0], this.nome[0].toUpperCase())

    }
}

const p1 = new Pessoa('teste', 52)
p1.formataNome()
//console.log(p1)

class Moto extends Pessoa {
    constructor(nome, idade, modelo, ano) {
        super(nome, idade)
        this.modelo = modelo
        this.ano = ano
    }

    formataNome_modelo() {
        this.modelo = this.modelo.replace(this.modelo[0], this.modelo[0].toUpperCase())
    }
}

const p1_moto = new Moto('lucas', 26, 'fan')

p1_moto.formataNome()
p1_moto.formataNome_modelo() //formata os dois nomes 

//console.log(p1_moto)

/*-------------------------------------*/


class Carro extends Pessoa {
    constructor(nome, idade) {
        super(nome, idade)
        this.modelo = ''
        this.ano = 0
    }

    get model() {
        return this.modelo
    }

    set model(x) {
        if (typeof x !== 'string') return

        this.modelo = x
    }

    get an() {
        return this.ano
    }

    set an(x) {
        if (typeof x !== 'number') return

        this.ano = x
    }

}

const carro1 = new Carro('enzo', 18)
carro1.model = 'uno'
carro1.an = 2010

carro1.formataNome()

console.log(carro1)