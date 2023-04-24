class Pessoa {
    constructor(nome, idade = 'não colocada') {
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
//cnh.fala_idade()


/*-------------------------------------------*/

class Carro extends Pessoa {
    constructor(nome, modelo, marca, preco) {
        super(nome)
        this.modelo = modelo
        this.marca = marca
        this.preco = preco
    }

    aumento(x) {
        this.preco = this.preco + (this.preco * (x / 100))
    }
}

const carro = new Carro('Lucas', 'Enzo', 'Ferrari',15000)
carro.aumento(10)
console.log(carro)