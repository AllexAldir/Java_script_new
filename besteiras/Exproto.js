//Utilizando prototypes

function Pessoa(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo

    Object.defineProperties(this, {
        nome: {
            value: nome,
            writable: true,

        },

        idade: {
            value: idade,
            writable: false,

        },

        sexo: {
            value: sexo,
            writable: false,

        }
    })
}

//criando protoype
Pessoa.prototype.formata_nome = () => {
    ob.nome = ob.nome.replace(ob.nome[0], ob.nome[0].toUpperCase())
    return ob
}

const ob = new Pessoa('renato', 52, 'M')

console.log(ob.formata_nome())