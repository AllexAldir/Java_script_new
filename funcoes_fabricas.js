//Funcoes fabrica
const i = () => console.log('*****************')

function Criapessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        Teste: function (texto) {
            return(
                `A pessoa: ${this.nome} está falando sobre: ${texto}`
            )
        }

    }
}

let Ob = Criapessoa('Állex','Campos')
let resul = Ob.Teste('JavaScript')
console.log(resul)
