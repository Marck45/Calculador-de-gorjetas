// variaveis e seletores
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let btn4 = document.querySelector(".btn-4");
let resultado = document.querySelector("#resultado-conta");
let dados = document.querySelector("#dados-conta");


// eventos

btn1.addEventListener('click', event =>{

    event.preventDefault();
    
    let taxa = 0.01;

    let nome = document.querySelector("#nome-cliente").value; 

    let valorConta = parseFloat(document.querySelector("#valor-conta").value);

    let valorTaxa = taxa * valorConta;

    let soma = (taxa * valorConta) + valorConta;

    let textResult = `<h1>VALOR DA CONTA</h1>
    <p>${nome}, o valor total da sua conta é ${soma} R$, onde ${valorTaxa} R$ foram de gorjeta!</p> `;

    resultado.innerHTML = textResult;

    showDados(nome, valorConta, valorTaxa, soma);

});

btn2.addEventListener('click', event =>{
    event.preventDefault();
  
    let taxa = 0.025;

    let nome = document.querySelector("#nome-cliente").value; 

    let valorConta = parseFloat(document.querySelector("#valor-conta").value);

    let valorTaxa = taxa * valorConta;

    let soma = (taxa * valorConta) + valorConta;

    let textResult = `<h1>VALOR DA CONTA</h1>
    <p>${nome}, o valor total da sua conta é ${soma} R$, onde ${valorTaxa} R$ foram de gorjeta!</p> `;

    resultado.innerHTML = textResult;

    showDados(nome, valorConta, valorTaxa, soma);

});

btn3.addEventListener('click', event =>{
    event.preventDefault();
   
    let taxa = 0.05;

    let nome = document.querySelector("#nome-cliente").value; 

    let valorConta = parseFloat(document.querySelector("#valor-conta").value);

    let valorTaxa = taxa * valorConta;

    let soma = (taxa * valorConta) + valorConta;

    let textResult = `<h1>VALOR DA CONTA</h1>
    <p>${nome}, o valor total da sua conta é ${soma} R$, onde ${valorTaxa} R$ foram de gorjeta!</p> `;

    resultado.innerHTML = textResult;

    showDados(nome, valorConta, valorTaxa, soma);
});

btn4.addEventListener('click', event =>{
    event.preventDefault();
    
    let taxa = 0.1;

    let nome = document.querySelector("#nome-cliente").value; 

    let valorConta = parseFloat(document.querySelector("#valor-conta").value);

    let valorTaxa = taxa * valorConta;

    let soma = (taxa * valorConta) + valorConta;

    let textResult = `<h1>VALOR DA CONTA</h1>
    <p>${nome}, o valor total da sua conta é ${soma} R$, onde ${valorTaxa} R$ foram de gorjeta!</p> `;


    resultado.innerHTML = textResult;

    showDados(nome, valorConta, valorTaxa, soma);

    

});




// funções

const showDados = (nome, valorConta, valorTaxa, soma) => {
    today = new Date ();

    dia = today.getDate();
    mes = today.getMonth()+1;
    ano = today.getFullYear();

    let dataFor = dia + "/" + mes + "/" + ano;

    dados.innerHTML = `
    <h1>Dados de conta para pagamento:</h1>
    <h3>Data: ${dataFor}</h3>
    <p>Nome do cliente: ${nome}</p>
    <p>Valor da gasto: ${valorConta} R$</p>
    <p>Gorjeta: ${valorTaxa} R$</p>
    <p>VALOR TOTAL: ${soma} R$</p>`

}




