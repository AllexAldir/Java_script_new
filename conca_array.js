//concatenando arrays

let array01 = [1,2,3,4]
let array02 = [5, 6, 7, 8]

console.log(array01.concat(array02))

/*-----------------------------------------*/

//Pode-se tbm concaternar um array utilizando o rest operator

let arra03 = [1,2,3,4,5,6,7,8,9]
let arra04 = [10,11,12]
let array05 = [...arra03,...arra04,'eu'] //Aqui copiando os valores dessas arrays
console.log(array05)