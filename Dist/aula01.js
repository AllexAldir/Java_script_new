"use strict";
function dados(x, y) {
    return x * y;
}
class Aluno {
    constructor(Nome, SobreNome, idade) {
        this.Nome = Nome;
        this.SobreNome = SobreNome;
        this.idade = idade;
    }
}
const ob = new Aluno('Lucas', 'Silva', 25);
const soma = (x, y) => x + y;
const mult = (x, y) => x * y;
const div = (x, y) => x / y;
const sub = (x, y) => x - y;
const result1 = soma(2, 4);
const result2 = soma(2, 5);
const result3 = soma(10, 2);
const result4 = soma(4, 4);
function liguagem(x) {
    return `Teste de linguagem ${x}`;
}
console.log(liguagem("python"));
/*---------------------------------------------*/
//Herança com typescritp
class Pessoa extends Aluno {
    constructor(Nome, SobreNome, idade, sexo) {
        super(Nome, SobreNome, idade);
        this.sexo = sexo;
    }
}
const ob2 = new Pessoa('Carlos', 'Santana', 23, 'm');
