const num = () => Math.round(Math.random() * (10000 - 1000) + 1)



// espera('teste01', num(), () => {
//     espera('teste02', num(), () => {
//         espera('teste03', num())
//     })
// }) //não se sabe em quanto tempo irá receber essa informação


function espera(ms, tempo) {
    return new Promise((resolve, reject) => {
        //Espera uma promessa (resolve executa o dado certo)
        //reject se occorer algum erro 

        setTimeout(() => {
            resolve(ms) //retorna a mensagem
            reject('erro ao receber o valor')
        }, tempo)
    })

}

espera('Teste agora', 4000)
    .then(e => {
        console.log(e)
        return espera('Teste segundo', 4000) //retorna a segundo resposta e cai no segundo then
    })
    .then(e => {
        console.log(e)
        //return e
    })
    
