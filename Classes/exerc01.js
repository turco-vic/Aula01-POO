class Pessoa {
    constructor(nome, idade ,altura) {
        this.nome = nome
        this.idade = idade 
        this. altura = altura
    }
    seApresentar(){
        console.log(`Olá,meu nome é ${this.nome}, tenho ${this.idade} anos de idade, e tenho ${this.altura} de altura!`);
    }
}

const user = new Pessoa("Cristiano", 7, 1.77)
const user1 = new Pessoa("Apolo", 77, 1.97)

user.seApresentar()
user1.seApresentar()