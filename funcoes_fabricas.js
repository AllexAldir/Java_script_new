//Funcoes fabrica
const i = () => console.log('*****************')

function Criapessoa(nome, sobrenome, peso = 0, altura = 0) {
    return {
        nome,
        sobrenome,

        //Colocando um getter Transformando a função em um atributo
        get NomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Colocando os setters
        NomeCompleto(valor) {
            this.nome = valor
        },

        Teste: function (texto) {
            return (
                `A pessoa: ${this.nome} está falando sobre: ${texto}`
            )
        },
        peso: peso,
        altura: altura,
        get imc() {
            return this.peso / (this.altura ** 2)
        }
    }
}

let Ob = Criapessoa('luiz', 'oliveira', 73, 1.87)
//let resul = Ob.Teste('JavaScript')
Ob.NomeCompleto('Junior')
console.log(Ob.nome);
