//Utilizando uma funcao geradora

function* retorna(nome) {
    yield function passo1() {
        console.log('Aqui está o passo 01')
    }

    yield function passo2() {
        console.log('Aqui está o passo 02')
    }

    yield function passo3() {
        console.log('Aqui está o passo 03')
    }

    yield function passo4() {
        return nome
    }
}

let ob = retorna().next()
let ob2 = retorna().next()
let valor01 = ob.value
let valor02 = ob2.value
valor02()

//por enquanto está somente retornando um valor de uma função