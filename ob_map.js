const pessoas = [
    { id: 1, nome: 'Luiz' },
    { id: 2, nome: 'Luiz' },
    { id: 3, nome: 'maria' },
]

const novas_pesssoa = new Map()

for (const pessoa of pessoas) {
    const {id} = pessoa
    novas_pesssoa.set(id, { ...pessoa })
}

console.log(novas_pesssoa)