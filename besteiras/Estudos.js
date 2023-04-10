const num = () => Math.round(Math.random() * (100 - 1) + 1)

const aleato = () => {
    let array01 = []

    while (array01.length < 100) {
        array01.push(num())
    }

    return array01
}
//array com 100 numeros

function* resultado01() {
    yield function (x) {
        return x()
    }

    yield function (x) {
        return x()
    }
}


function* resultado02() {

    yield* resultado01()

    yield function (x) {
        return x()
    }

    yield function (x) {
        return x()
    }
}

const ob = resultado02()
let valor01 = ob.next().value
let resul1 = valor01(aleato)
let valor02 = ob.next().value
let resul2 = valor01(aleato)
let valor03 = ob.next().value
let resul3 = valor01(aleato)
let valor04 = ob.next().value
let resul4 = valor01(aleato)

//Formas de particar funcoes geradoras com o metodo filter

const filtragem = (array1, array2, array3, array4) => {
    let final;

    let filtro01 = array1.filter(e => e % 2 === 0)
    let filtro02 = array2.filter(e => e % 2 === 0)
    let filtro03 = array3.filter(e => e % 2 === 0)
    let filtro04 = array4.filter(e => e % 2 === 0)

    return final = [...filtro01,...filtro02,...filtro03,...filtro04]
}

console.log(filtragem(resul1,resul2,resul3,resul4))