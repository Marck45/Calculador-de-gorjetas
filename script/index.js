let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let btn4 = document.querySelector(".btn-4");
let resultado = document.querySelector("#resultado-conta");


btn1.addEventListener('click', event =>{
    event.preventDefault();
    
    let taxa = 0.01;

    let nome = document.querySelector("#nome-cliente").value; 

    let valorConta = parseFloat(document.querySelector("#valor-conta").value);

    let soma = (taxa * valorConta) + valorConta;

    let textResult = `<h1>VALOR DA CONTA</h1>
                    <p>${nome}, o valor total da sua conta é ${soma}, onde R$  foram de gorjeta!</p> `;


    console.log('oi');

    resultado.innerHTML = textResult;

});

btn2.addEventListener('click', event =>{
    event.preventDefault();
  
    let taxa = 0.025;

    let nome = document.querySelector("#nome-cliente").value; 

    let valorConta = parseFloat(document.querySelector("#valor-conta").value);

    let soma = (taxa * valorConta) + valorConta;

    let textResult = `<h1>VALOR DA CONTA</h1>
                    <p>${nome}, o valor total da sua conta é ${soma}, onde R$  foram de gorjeta!</p> `;


    console.log('oi');

    resultado.innerHTML = textResult;

});

btn3.addEventListener('click', event =>{
    event.preventDefault();
   
    let taxa = 0.05;

    let nome = document.querySelector("#nome-cliente").value; 

    let valorConta = parseFloat(document.querySelector("#valor-conta").value);

    let soma = (taxa * valorConta) + valorConta;

    let textResult = `<h1>VALOR DA CONTA</h1>
                    <p>${nome}, o valor total da sua conta é ${soma}, onde R$  foram de gorjeta!</p> `;


    console.log('oi');

    resultado.innerHTML = textResult;

});

btn4.addEventListener('click', event =>{
    event.preventDefault();
    
    let taxa = 0.1;

    let nome = document.querySelector("#nome-cliente").value; 

    let valorConta = parseFloat(document.querySelector("#valor-conta").value);

    let soma = (taxa * valorConta) + valorConta;

    let textResult = `<h1>VALOR DA CONTA</h1>
                    <p>${nome}, o valor total da sua conta é ${soma}, onde R$  foram de gorjeta!</p> `;


    console.log('oi');

    resultado.innerHTML = textResult;

});


