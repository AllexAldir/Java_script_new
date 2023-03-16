const ob_date = new Date()
ob_date.getMinutes

const ajeita = (x) => x < 10 ? `0${x}` : x

const FormatHora = (objeto, ajeita) => {

    let dia = ajeita(objeto.getDate())
    let mes = ajeita(objeto.getMonth() + 1)
    let ano = ajeita(objeto.getFullYear())
    let hora = ajeita(objeto.getHours())
    let mint = ajeita(objeto.getMinutes())
    return (`
        Hoje é: ${dia}/${mes}/${ano} com as horas: ${hora} : ${mint}
    `)
}

console.log(FormatHora(ob_date, ajeita));