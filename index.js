import {Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"


console.log("Hello World");

//chave SSH: https://www.youtube.com/watch?v=7YVQLZp1jb0
//https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent


//com o uso de uma Classe
const cliente1 =  new Cliente()

cliente1.nome = "Ricardo";
cliente1.cpf = 11220399292;

const cliente2 =  new Cliente()

cliente2.nome = "Alice";
cliente2.cpf = 8895764483;

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001 );
contaCorrenteRicardo._saldo = 500;

const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);
contaCorrenteAlice._saldo = 300;





 

console.log(contaCorrenteRicardo, contaCorrenteAlice);

//só estamos realizando um teste, mas nao é correto exibir atributos privados
contaCorrenteAlice.sacar(100);
console.log(contaCorrenteAlice._saldo);

contaCorrenteAlice.depositar(600);
console.log(contaCorrenteAlice._saldo);

const valorSacado =  contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo.saldo);
console.log(contaCorrenteAlice);

contaCorrenteRicardo.transferir(100,contaCorrenteAlice );



//Sem uso de uma classe para declarar os valores
// const cliente1Nome = "Ricardo";
// const cliente1CPF = 112233309;
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;



