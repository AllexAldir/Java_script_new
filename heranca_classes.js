//Utilizando herança em classes

class Dispositivo {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    //metodos para ligar e desligar

    ligar() {
        if (this.ligado) {
            console.log(`O ${this.nome} ja está ligado`)
            return
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`O ${this.nome} ja está desligado`)
            return
        }

        this.ligado = false
    }


}

/*Criando outra classe para receber os atributos da super classe*/

class Celular extends Dispositivo {
    constructor(nome, cor) {
        super(nome) //Passa os atributos da super classe para essa classe
        this.cor = cor
    }
}

const celular = new Celular('iphone', 'black')
//console.log(celular)


class Tablet extends Dispositivo {
    constructor(nome, modelo) {
        super(nome)
        this.modelo = modelo
    }

    ligar() {
        console.log('Tablet está ligado')
    }
}

const tablet = new Tablet('ipad', 'xt001')
tablet.ligar()