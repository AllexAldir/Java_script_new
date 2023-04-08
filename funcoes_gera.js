//Falando um pouco das funcoes geradoras 

function* gera() {
    yield 'valor1'
    //Retorna pausadamete os valores nesse cenario irá retornar o valor1
    yield 'valor2'

    yield 'valor3'

}

const valor = gera()//Aqui ta retornando o objeto
console.log(valor.next().value)
console.log(valor.next().value) //Retornando o valor todas as vezes q eu executar
console.log(valor.next().value)

//Colocando um contador

function* contador() {
    let i = 0

    while (true) {
        yield i++
        //i++
    }
}

const resul = contador()
console.log(resul.next().value)
console.log(resul.next().value)
console.log(resul.next().value)

//Pode-se delegar parte de sua função para outra função

function* deleaga01() {
    yield 0
    yield 1
    yield 2
}

function* deleaga02() {
    yield* deleaga01()
    yield 3
    yield 4
    yield 5
}

const re = deleaga02()
console.log(re.next().value)
console.log(re.next().value)
console.log(re.next().value)
console.log(re.next().value)
console.log(re.next().value)
console.log(re.next().value)


/*------------------------------------*/

function imc() {
    return 3.14
}

function* teste() {
    yield imc()
    yield 'hello'
}

const d = teste()

console.log(d.next().value)
console.log(d.next().value)

/*-----------------------------*/

//Utilizando funções

function* geradora5() {
    yield function (x) {
        console.log(`Seu nome: ${x}`)
    }
    yield function () {
        console.log(`oi`)
    }
}

const g5 = geradora5()

let valor_01 = g5.next().value
valor_01('teste')
let valor_2 = g5.next().value
valor_2()