let par = []
let impar = []

const veri = () => Math.round(Math.random() * (100 - 1) + 1)

console.log(veri())
    
const user = (callback) => {

    let num_temp = callback
    
    console.log(num_temp)
    
    if(num_temp %2 == 0){
        par.push(num_temp)
    }else{
        impar.push(num_temp)
    }

}

console.log(user(veri))

console.log(
    impar,
    par
)