//Exercitando as funções construtoras

function Retorna(marca = 'não existe', modelo = 'não existe', ano = 0) {
    marca = marca.replace(marca[0], marca[0].toUpperCase())
    modelo = modelo.replace(modelo[0], modelo[0].toUpperCase())

    return {
        marca,
        modelo,
        ano,
        num: function () {
            return Math.round(Math.random() * (100 - 1) + 1)
        }
    }
}

const ob = Retorna('ferrari', 'enzo', '2015')
//console.log(ob.num);

let Ale = ob.num

let cont = 0

while (cont != 100) {
    cont = Ale()
    console.log(cont)
}