//Utilizando arrays para criar um construtor

const array = new Array('lucas','joana','pedro')

//console.log(array)

//Sprage operator

let new_array = [...array] // copy o valor(s) de uma array 
new_array.pop()
//console.log(array)
//console.log(new_array)

//console.log(new_array.slice(0,1)) //Método slice fatia os valores de uma função e retorna em uma nova array 


//Separando strings e transformando em array

let nome = 'Kaio guilherme'

let arrat02 = nome.split(' ')
console.log(arrat02)

//Transformando array em strung novemente : join()

let arrayyy = ['luiz','felipe']

console.log(arrayyy.join(' '))