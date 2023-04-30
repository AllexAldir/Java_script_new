$(document).ready(function () {
    /*Validando campos*/
    $('#nome').on('keyup', function () {
        if ($('#nome').val() == '') $('#D_error_nome').html('nome está em branco')

        if ($('#nome').val() !== '') $('#D_error_nome').html('')
    })

    $('#sobrenome').on('keyup', function () {
        if ($('#sobrenome').val() == '') $('#D_error_sobrenome').html('sobrenome está em branco')

        if ($('#sobrenome').val() !== '') $('#D_error_sobrenome').html('')
    })

    $('#user').on('keyup', function () {
        //console.log($('#user').val())
        if (($('#user').val().length == 0)) {
            $('#D_error_user').html('Usuário está em branco')
        } else {
            $('#D_error_user').html('')
            if (($('#user').val().length < 3)) $('#D_error_user').html('Usuário Possui menos de 3 caracteres')
            if (($('#user').val().length > 12)) $('#D_error_user').html('Usuário ultrapassa o valor limite de caracteres.')
        }

    })

    $('#senha').on('change', function () {
        //console.log($('#user').val())
        if (($('#senha').val().length == 0)) {
            $('#D_error_senha').html('Senha está em branco')
        } else {
            $('#D_error_senha').html('')
            if (($('#senha').val().length < 6)) $('#D_error_senha').html('Senha Possui menos de 6 caracteres')
            if (($('#senha').val().length > 12)) $('#D_error_senha').html('Senha ultrapassa o valor limite de caracteres.')
        }

    })

    // $('#rep_senha').on('change', function () {
    //     if ($('#rep_senha').val() !== $('#senha').val()) $('#D_error_repsenha').html('As senhas não se correspondem!')
    // })

    /*Validando campos*/


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
                if (this.valida_user() === true && this.valida_senha() === true) return $('#D_error_repsenha').html('')

                return $('#D_error_repsenha').html('As senhas não se correspondem!')
            }


            valida_user() {
                if (this.usuario.length < 3 || this.usuario.length > 12) return //alert(`Usuario possui: ${this.usuario.length} caracteres`)

                return true
            }


            valida_senha() {
                if (this.senha.length < 6 || this.senha.length > 12) return //alert(`A senha possui: ${this.senha.length} caracteres`)

                if (this.senha_repetida !== this.senha) return //alert(`senhas não conhecidem...`)

                return true
            }


        }


        const ob = new Usuario(nome, sobrenome, user, senha, senha_repetida)

        ob.resultado()

    })

})

