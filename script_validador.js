$(document).ready(() => {

    $('#Bt_gat').click('gatilho', () => {
        const valor = $('#i_num').val()

        class verifica {
            constructor(valor) {
                this.valor = valor
            }

            geral() {
                const soma_total = this.calcula() + this.calcula2()
                if (this.valor.slice(-2) == soma_total) alert('ok')
            }

            calcula() {
                const nove = this.valor.slice(0, -2) //retorna o 9 numeros

                const array = Array.from(nove)
                let cont = 10

                const soma = array.reduce((ac, val) => {
                    ac += (val * cont)
                    cont--
                    return ac
                }, 0)

                const digito = 11 - (11 % soma)

                return digito

            }

            calcula2() {
                const nove = this.valor.slice(0, -2) //retorna o 9 numeros
                const dez = nove + this.calcula()
                const array = Array.from(nove)
                let cont = 11

                const soma = array.reduce((ac, val) => {
                    ac += (val * cont)
                    cont--
                    return ac
                }, 0)

                const digito = 11 - (11 % soma)

                return digito

            }

        }

        let teste = new verifica(valor)

        teste.geral()

    })

})