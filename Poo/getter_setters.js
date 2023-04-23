const _velocidade = Symbol('velocidade') //Gera um id aleatorio

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    set velo(valor) {
        if (typeof valor !== 'number') return
        if (valor >= 100 || valor <= 0) return

        this[_velocidade] = valor
    }

    get velo() {
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 100) return

        this[_velocidade]++ //Aumenta a .velocidade
    }

    freiar() {
        if (this[_velocidade] <= 0) return

        this[_velocidade]-- //Diminui a .velocidade
    }
}

const carro = new Carro('Uno')
cont = 0

// while (cont < 200) {
//     carro.acelerar()
//     cont++
// }

carro.velo = 20 //setter

console.log(carro.velo) 