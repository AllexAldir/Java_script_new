//Criando classes

class Pessoa {
    constructor(nome, sobrenome) { //Passar os parâmetros para a classe
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`Teste: ${this.nome}`) //criando um metodo automaticamente ele irá para o prototype
    }
}

const pessoa = new Pessoa('Lucas', 'Oliveira')
const pessoa2 = new Pessoa('Maria', 'Oliveira')
const pessoa3 = new Pessoa('Joao', 'Oliveira')
const pessoa4 = new Pessoa('Pedro', 'Oliveira')

pessoa.falar() //herdao o proto da superclasse
pessoa2.falar()
pessoa3.falar()
pessoa4.falar()