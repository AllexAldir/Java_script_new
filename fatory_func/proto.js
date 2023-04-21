//Criando prototypes com factory functions

const teste1 = {
    falnome() {
        console.log(`Teste: ${this.nome}`)
    }
}

const teste2 = {
    falsobrenome() {
        console.log(`Teste: ${this.sobrenome}`)
    }
}

const prototypes = { ...teste1, ...teste2 } //copiando os valores dos obejetos


function Pessoa(nome, sobrenome) {

    return Object.create(prototypes, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const pessoa = Pessoa('João', 'Oliveira')
pessoa.falsobrenome()