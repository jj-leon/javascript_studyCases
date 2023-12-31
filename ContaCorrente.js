import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    _cliente;
    agencia;
    
    set cliente(novoValor){
      if(novoValor instanceof Cliente){
        this._cliente = novoValor;
      }
    }
    
    //atributo privado
    _saldo = 0; 

    get saldo(){
      return this._saldo;
    }

    constructor(cliente, agencia){
      this.agencia = agencia;
      this.cliente = cliente;
    }
  
    sacar(valor){
      if(this._saldo >= valor){
        this._saldo -= valor;
        return valor;
      }
     
    }
  
    depositar(valor){
  
    if(valor <= 0){
      return;
    }
      this._saldo += valor;
  
    }

     transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
     }
  }