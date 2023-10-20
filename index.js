console.log("Hello World");
class Cliente{
nome;
cpf;
}

class ContaCorrente{
  agencia;
  //atributo privado
  _saldo = 0; 

  sacar(valor){
    if(this._saldo >= valor){
        this._saldo -= valor;
    }
  }

  depositar(valor){
    this._saldo += valor;

  }
}



//com o uso de uma Classe
const cliente1 =  new Cliente()

cliente1.nome = "Ricardo";
cliente1.cpf = 11220399292;
cliente1.agencia = 1001;
cliente1._saldo = 0;

const cliente2 = new Cliente()

 cliente2.nome = "Alice";
 cliente2.cpf = 8895764483;
 cliente2.agencia = 1001;
 cliente2._saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 500;
contaCorrenteRicardo.agencia = 1001;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice._saldo = 300;
contaCorrenteAlice.agencia = 1001;
 

console.log(cliente1, cliente2);

//só estamos realizando um teste, mas nao é correto exibir atributos privados
contaCorrenteAlice.sacar(100);
console.log(contaCorrenteAlice._saldo);

contaCorrenteAlice.depositar(600);
console.log(contaCorrenteAlice._saldo);




//Sem uso de uma classe para declarar os valores
// const cliente1Nome = "Ricardo";
// const cliente1CPF = 112233309;
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;



