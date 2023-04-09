//utilizando o metodo splice

//Utilizado para adicionar excluir e colocar o indice

let array01 = ['luiz', 'lucas', 'geovana', 'clara']

//let quan = (array01.splice(-2, Number.MAX_VALUE)) //apagando o ultimo elemento e retornando um novo array

//console.log(quan);

//Apagando toda minha array com essa função!

const retorna = () => Math.round(Math.random() * (100 - 1) + 1)
let array02 = []
while (array02.length < 50) {
    array02.push(retorna())
    //console.log(array02.length)
}
//console.log(`Esse é o array inteiro: ${array02}`)
//console.log(array02.splice(array02.length-1, Number.MAX_VALUE))

/*-------------------------------------------------------------------*/
//Colocando elementos

array01.splice(2, 1, 'Campos') //aqui quero remova 1 elemento do indice 2 e adicione 'Campos'

console.log(array01)    