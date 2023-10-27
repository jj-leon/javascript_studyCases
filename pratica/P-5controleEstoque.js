//controle de estoque de uma loja de games, onde através d eum loop é verificado se a loja tem o produto desejado pelo cliente.

const jogosDisponiveis =  new Array(
    `Crash Bandicot`,
    `Spider-man Miles Morales`,
    `The Last Of Us`,
    `Call of Duty Black Ops`,
    `Forza Horizon`,
    );

    let i = 0;

while(i < 5){
    console.log(`\n${jogosDisponiveis[i]} está disponível para compra`);
    i += 1;
}

const compra = "Spider-man";
i = 0;
let jogoEmEstoque = false;
while(i < 5){
    if(jogosDisponiveis[i] == compra){
    jogoEmEstoque = true;
    break;
    }
    i += 1;
}

console.log(`\n\né ${jogoEmEstoque} que temos o jogo em estoque`);
