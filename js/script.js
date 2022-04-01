//Pegado todos os elementos que contem a clase paciente
const todosPacientes = document.querySelectorAll(".paciente");

//Fazendo um forEach para percorrer todos os elementos e alimentar a tabela
todosPacientes.forEach((paciente) => {
    //Pegando o peso do paciente
    const peso = paciente.querySelector(".info-peso").textContent;
    //Pegando a altura do paciente
    const altura = paciente.querySelector(".info-altura").textContent;
    //Validadndo se algum dado é menor que 0 ou maior do que o permitido
    if((peso > 0 && peso < 1000) && (altura > 0 && altura < 3.00)){
        //Inserindo o imc na tabela
        const imcOrigem = paciente.querySelector(".info-imc");
        //Utiilizando o toFixed para arredondar as casa decimais
        imcOrigem.textContent = calculaImc(peso,altura)
    } else {
        const imcOrigem = paciente.querySelector(".info-imc");
        imcOrigem.textContent = 'Erro';
        paciente.classList.add("paciente-invalido");
    }
});

function calculaImc(peso, altura){
    //Calculando o imc
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

