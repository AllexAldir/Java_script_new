const array = []

const numAle = () => Math.round(Math.random() * (100 - 1) + 1)
let cont = 0


function ExArray() {

    while (array.length < 100) {
        array.push(numAle())
        //console.log(array)
        array.length
    }

    return(array);
}

ExArray()

let pares = array.filter((x => x %2 === 0))

console.log(pares)