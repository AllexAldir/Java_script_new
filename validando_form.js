$(document).ready(function () {
    $('#enviar').on('click', function () {
        const user = $('#user').val()
        const nome = $('#nome').val()
        const sobrenome = $('#sobrenome').val()
        const senha = $('#senha').val()
        const senha_repetida = $('#rep_senha').val()

        class Usuario {
            constructor(nome, sobrenome, usuario, senha, re_senha) {
                this.nome = nome
                this.sobrenome = sobrenome
                this.usuario = usuario
                this.senha = senha
                this.senha_repetida = re_senha
            }

            resultado() {
                if (this.valida_user() === true && this.valida_senha() === true) return alert('Ok passou!')

                return alert(false)
            }


            valida_user() {
                if (this.usuario.length < 3 || this.usuario.length > 12) return alert(`Usuario possui: ${this.usuario.length} caracteres`)

                return true
            }


            valida_senha() {
                if (this.senha.length < 6 || this.senha.length > 12) return alert(`A senha possui: ${this.senha.length} caracteres`)

                if (this.senha_repetida !== this.senha) return alert(`senhas não conhecidem...`)

                return true
            }


        }


        const ob = new Usuario(nome, sobrenome, user, senha, senha_repetida)

        ob.resultado()

    })

})

