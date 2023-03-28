const Formata = (x) => {
    let data = new Date(x * 1000)
    return (
        data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
            //Aqui formata a data para o padrão brasileiro
        })
    )
}

let conta = 0

document.querySelector('#bt01').addEventListener('click', () => {
    setInterval(() => {
        conta++
        document.querySelector('.crono').innerHTML = Formata(conta)
    }, 1000);
})

document.querySelector('#bt02').addEventListener('click', ()=>{
    clearInterval(conta)

})

document.querySelector('#bt03').addEventListener('click', () => {
    conta = 0
    clearInterval(conta)
    //document.querySelector('.crono').innerHTML = ''
})