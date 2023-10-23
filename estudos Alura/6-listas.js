console.log("Trabalhando com listas");


//nao é uma boa pratica
const salvador = "Salvador";
const saoPaulo = "Sao Paulo";
const rioDeJaneiro = "Rio de Janeiro";

console.log("Destinos possíveis:");
console.log(salvador, saoPaulo, rioDeJaneiro);

//boa pratica, usando lista para facilitar
//criando um array
const listaDeDestinos = new Array(
"Minas Gerais",
"Paraná",
"Mato Groso"

);
listaDeDestinos.push("Curitiba");//adicionan item na lista

console.log("Destinos possíveis na lista:")
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1)//remove elemento
console.log("Novos elementos após a remoçao:");
console.log(listaDeDestinos);
//exibindo elemento específico
console.log(listaDeDestinos[1]);

//exibindo 2 elementos específicos
console.log(listaDeDestinos[1], listaDeDestinos[2]);


