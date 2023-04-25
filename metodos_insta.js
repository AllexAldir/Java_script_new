//Metodos de instancia e metodos estaticos

class ControleRemoto {
    constructor(nome) {
        this.nome = nome
        this.volume = 0
    }

    //Metodos de instancia(proto)
    aumentar() {
        this.volume += 1
    }

    diminuir() {
        this.volume -= 1
    }

    /*---------------------------*/

    //Metodos estaticos
    static trocapilha() {
        console.log('ok pilha foi trocada!')
    }
}

const controle1 = new ControleRemoto('sony')

controle1.aumentar()
controle1.aumentar()
controle1.aumentar()

console.log(controle1)

//Utilizando metodos estaticos

ControleRemoto.trocapilha() //n precisa da palavra new 