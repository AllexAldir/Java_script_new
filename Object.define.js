//ObjectdefineProperty() e object.defineProperties()

function Contrutor_pessoa(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo

    this.sayhello = () => {
        console.log(`Teste ${this.nome}`)
    }

    Object.freeze(this)
}

let resposta = new Contrutor_pessoa('joão', 45, 'm')

resposta.nome = 'lucas'

console.log(resposta)