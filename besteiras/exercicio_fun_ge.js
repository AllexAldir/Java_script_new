function* gera01() {
    yield function () {
        console.log('teste01')
    }
    yield function () {
        console.log('teste02')
    }
    yield function () {
        console.log('teste03')
    }
}

function* gera_final() {
    yield* gera01()

    yield 1
    yield 2
    yield 3
}

const obg = gera_final()
let fun1 = obg.next().value
fun1()
let fun02 = obg.next().value
fun02()
let fun03 = obg.next().value
fun03()
let fun04 = obg.next().value
console.log(fun04)
let fun05 = obg.next().value
console.log(fun05)
let fun06 = obg.next().value
console.log(fun06)
