$(document).ready(function () {
    $('#enviar').on('click', function () {
        const cpf = $('#cpf_').val()


        class Cpf {
            constructor(cpf) {
                this.cpf = cpf
            }


            resultado() {
                const cpf_nove = this.valida().slice(0, -2)
                const digito1 = this.pegardigito(cpf_nove)
                //console.log(digito1)
                const cpf_dez = cpf_nove + digito1
                const digito2 = this.pegardigito(cpf_dez)
                const resultado = cpf_dez + digito2
                if(resultado == this.cpf) alert('ok')
            }


            valida() {
                let cpf = this.cpf
                if (typeof cpf !== 'string') return alert('erro cpf')
                if (cpf.length > 12) return alert('cpf possui mais de 11 caracteres')

                return cpf

            }

            pegardigito(x) {
                let contador = x.length + 1
                const array = Array.from(x)
                const soma = array.reduce((ac, val) => {
                    ac += (val * contador)
                    contador--

                    return ac
                }, 0)

                const funcao = String(11 - (soma % 11))
                console.log(funcao)
                return funcao > 10 ? '0' : funcao
            }
        }

        const cpfob = new Cpf(cpf)

        cpfob.resultado()
    })
})