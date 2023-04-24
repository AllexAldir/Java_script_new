$(document).ready(() => {

    $('#Bt_gat').click('gatilho', () => {
        const valor = $('#i_num').val()

        class verifica {
            constructor(valor) {
                this.valor = valor
            }

            geral() {
                const soma_total = this.calcula() + this.calcula2()
                //console.log(this.calcula(),this.calcula2())
                if (this.valor.slice(-2) == soma_total) alert('cpf valido')
                
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

                const digito = 11 - (soma % 11)

                return digito >= 10 ? '0' : digito

            }

            calcula2() {
                const nove = this.valor.slice(0, -2) //retorna o 9 numeros
                const dez = nove + this.calcula()
                //console.log(dez)
                const array = Array.from(dez)
                //console.log(array)
                let cont = 11

                const soma = array.reduce((ac, val) => {
                    ac += (val * cont)
                    cont--
                    return ac
                }, 0)

                //console.log(soma)
                const digito = 11 - (soma % 11)
                //console.log(digito)

                return digito >= 10 ? '0' : digito

            }

        }

        let teste = new verifica(valor)
        teste.geral()

    })

})