import say from "./module/mod01";

function calcula(x: number, y: number) {
    return x + y
}

//console.log(calcula(3, 4))

type teste = 'ok' | 'teste' | 'analise';

const resul = (x: teste) => console.log(x)

let nome = 'Ok'

say() 