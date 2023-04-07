//Utilizando uma funcao geradora

function* retorna() {
    yield function passo1() {
        console.log('Aqui está o passo 01')
    }

    yield function passo2() {
        console.log('Aqui está o passo 02')
    }

    yield function passo3() {
        console.log('Aqui está o passo 03')
    }

    yield function passo4(nome){
        console.log(`O nome é ${nome}`)
    }
}   

let ob = retorna()
//console.log(ob)

for(let i of ob){
    i('Lucas') //caso não receba parâmetro recebe nada
}

