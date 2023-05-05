// fetch('../html/tabela_cal.html')
//     .then(e => {
//         if (e.status !== 200) throw new Error('Erro ao capturar os dados') //ja lança no meu catch

//         return {
//             resultado: e,
//             status: e.status
//         }
//     })
//     .then(e => console.log(e)) // Response
//     .catch(e => console.error(e))

function dados() {
    $('.teste').on('click', async function (e) {
        e.preventDefault();

        let href = $('.teste').prop('href')

        try {
            const resultado = await fetch(href).then(e => e.text())

            $('.teste').append(resultado)
            
        } catch (error) {
            console.log(`Erro na requisição: ${error}`)
        }
        
        
    })
}

dados()