//Criando calculadora atraves de factories functions

function Criacalculo() {

    return {
        //Colocar os atributos
        display: document.querySelector('#display'),

        clear: document.querySelector('.btn_clear'),

        apagaum: document.querySelector('.btn_apa'),

        igual: document.querySelector('.btn_igual'),

        inicia: function () {
            alert('ok iniciei')
        },

        clique() {
            const botoes = document.querySelectorAll('.btn_num')
            //console.log(botoes)

            for (let i of botoes) {
                i.addEventListener('click', () => {
                    let texto = + i.textContent
                    //console.log(texto)
                    this.paradisplay(texto)
                    this.Limpar()
                    this.Apagaum()
                    this.Calcula(texto)
                })
            }
        },

        paradisplay(valor) {
            this.display.value += valor

        },

        Limpar() {
            let clear = this.clear

            clear.addEventListener('click', () => {
                this.display.value = ''
            })
        },

        Apagaum() {
            let apaga = this.apagaum

            apaga.addEventListener('click', () => {
                let teste = this.display.value
                //Aqui tem que apagar só 1 o ultimo
            })
        },

        Calcula(valor) {
            let igual = this.igual
            igual.addEventListener
            console.log(valor)
                ('click', () => {
                    // let val = eval(valor)
                    // this.display.value = val
                })
        }

    }
}

const retorna = Criacalculo()

retorna.clique()

