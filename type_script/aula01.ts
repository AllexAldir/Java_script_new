function dados(x: number, y: number) {
    return x * y
}


//console.log(1, 8)

/*Exemplo na progamação orientada a objetos*/

interface Nome {
    Nome: string
}
//Contratos
interface SobreNome {
    SobreNome: string
}

class Aluno implements Nome, SobreNome {
    constructor(
        public readonly Nome: string,
        public readonly SobreNome: string,
        private readonly idade: number
    ) { }
}

const ob = new Aluno('Lucas', 'Silva', 25)

/*--------------------------------------------*/

//Determinar os tipos para cada função:

type calculo = (x: number, y: number) => number //Modelo para projetar funções que receberão 2 numeros e retornarão do tipo 'number'

const soma: calculo = (x, y) => x + y;
const mult: calculo = (x, y) => x * y;
const div: calculo = (x, y) => x / y;
const sub: calculo = (x, y) => x - y;

const result1 = soma(2, 4)
const result2 = soma(2, 5)
const result3 = soma(10, 2)
const result4 = soma(4, 4)

/*---------------------------------------------*/

//Autocompletar:

type Teste = 'python' | 'js' | 'ts'; // somente poderá passa para a função esses valores

function liguagem(x: Teste) {
    return `Teste de linguagem ${x}`
}

console.log(liguagem("python"))

/*---------------------------------------------*/

//Herança com typescritp

class Pessoa extends Aluno {

    sexo: string; //Faz parte dessa classe

    constructor(Nome: string, SobreNome: string, idade: number, sexo: string) {
        super(Nome, SobreNome, idade);
        this.sexo = sexo;
    }
}

const ob2 = new Pessoa('Carlos', 'Santana', 23, 'm')