class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    fala_idade() {
        console.log(`Idade: ${this.idade}`)
    }
}

class Cnh extends Pessoa {
    constructor(nome, idade, rg, carro) {
        super(nome, idade)
        this.rg = rg
        this.carro = carro
    }
}

const pessoa = new Pessoa('Lucas', 23)
const cnh = new Cnh('Carlos', 25, 748569, 'Jeta')
cnh.fala_idade()
