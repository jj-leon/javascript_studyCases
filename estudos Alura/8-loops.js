const listaDeDestinos = new Array("\nMinas Gerais", "Paraná", "Mato Groso");
listaDeDestinos.push("Curitiba"); //adicionan item na lista

const idadeComprador = 10;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = `Itabira`;

console.log("\nDestinos possíveis na lista:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
for(contador = 0; contador < 3; contador++){ 
    if(listaDeDestinos[contador] == destino){
      destinoExiste = true;
        break
}

}

console.log('O Destino existe:', destinoExiste);



