//validando cpf com classes curso

class Validacpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpflimpo', {
            value: cpf.replace(/\D+/g, ''),
        })

    }

    //novocpf
    novocpf() {
        this.valida()
        const nove = this.cpflimpo.slice(0,-2)
        const digito = this.geraDigito(nove)
        const dez = nove + digito
        const segundo = this.geraDigito(dez)
        const resultado = dez + segundo
        if(resultado === this.cpflimpo) return console.log(true)
    }

    geraDigito(numeros) {
        const array = Array.from(numeros) //Transforma as string em array
        let contador = array.length + 1
        
        //console.log(array.length)
        const soma = array.reduce((ac, val) => {
            ac += (val * contador)
            contador--
            return ac
        }, 0)   

        //console.log(soma)

        const funcao = 11 - (soma % 11)
        //console.log(funcao)

        return funcao > 10 ? '0' : String(funcao) //formata o digito
    }

    //validações
    valida() {
        if (typeof this.cpflimpo == ! 'string') return '01'
        if (this.cpflimpo.length != 11) return '02'
        if (this.cpflimpo[0].repeat(11) === this.cpflimpo) return '03'
        return console.log('cpf aceito')
    }

}

let ob = new Validacpf('573.598.290-70')

ob.novocpf()