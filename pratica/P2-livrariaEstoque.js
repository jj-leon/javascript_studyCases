class Store{
    title;
    id;

//método do objeto    
livro(nome, number){
    this.title = nome;
    this.id = number;
}

}

const aBelaFera = new Store()

aBelaFera.title = `A Bela e a Fera`;
aBelaFera.id = 2544;



//instanciando um objeto(livro) novo no estoque
let l1 = new Store();
//criando atributos ao objeto
l1.livro(`mudando o Titulo`, 3224);


console.log(l1, aBelaFera);


