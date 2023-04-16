//ObjectdefineProperty() e object.defineProperties()

function Contrutor_pessoa(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo

    // this.sayhello = () => {
    //     console.log(`Teste ${this.nome}`)
    // }


}

Contrutor_pessoa.prototype.sayhello = () => console.log(`Teste ${ob.nome}`) //Prototype

const ob = new Contrutor_pessoa('Jorge', 21, 'm')
Object.defineProperty(ob, 'idade', { //Configurar os valores dos atributos
    writable: false,
    enumerable: true,
    value: ob.idade
})

ob.sayhello()
