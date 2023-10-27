const listaDeDestinos = new Array("Minas Gerais", "Paraná", "Mato Groso");
listaDeDestinos.push("Curitiba"); //adicionan item na lista

const idadeComprador = 10;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis na lista:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(2, 1); //remove elemento
}
 else {
  console.log("Nao é mnaior de idade, nao é possível vender");
}

console.log("Embarque: \n\n");
if(idadeComprador > 18 && temPassagemComprada){
  console.log("Boa viagem");
}else{
  console.log("Você nao pode embarcar"); 
}

console.log("Novos elementos após a remoçao:");
console.log(listaDeDestinos);

//Operador lógico boleano
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
