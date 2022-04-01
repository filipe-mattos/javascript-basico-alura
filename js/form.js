//Selecionando o botão do form
const adicionarPaciente = document.querySelector("#adicionar-paciente");
//Adicionando um evento ao botão
adicionarPaciente.addEventListener("click", (event) => {
    //utilizando para previnir o comportamento padrão do navegador
    event.preventDefault();
    // pegando os inputs do form e passando para variaveis
    const dadosForm = document.querySelector("#form-adiciona");
    const paciente = obterDadosForm(dadosForm);
    //const pacienteTr = montaTr(paciente);
    const mensagensError = validaPaciente(paciente);
    
    if(mensagensError.length > 0){
        imprimeMensagemErro(mensagensError);
        return ;
    }

    adcionaPacienteTabela(paciente)

    //pegando a tabela de pacientes
    //const tabelaPacientes = document.querySelector("#tabela-pacientes");
    // inserindo a a tr na tabela de pacientes
    //tabelaPacientes.appendChild(pacienteTr);
    dadosForm.reset();
});

function adcionaPacienteTabela(paciente){
    const pacienteTr = montaTr(paciente);
    const tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr);
    
}

function obterDadosForm(form){
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montaTr(paciente){
    //Criando um elemento html
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //juntando todas as tag td dentro de uma tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    const td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validaPeso(paciente){
    if(paciente.peso >= 0 && paciente.peso < 1000)
        return true;
    return false;
}

function validaAltura(paciente){
    if(paciente.altura >= 0 && paciente.altura < 3.00)
        return true;
    return false;
}

function validaPaciente(paciente){
    const erros = [];

    if(paciente.nome.length == 0)
        erros.push("O nome não pode ficar em branco");

    if(paciente.gordura.length == 0)
        erros.push("A gordura não pode ficar em branco");
        
    if(paciente.peso.length == 0)
        erros.push("O peso não pode ficar em branco");

    if(paciente.altura.length == 0)
        erros.push("A altura não pode ficar em branco");       
        
    if(!validaPeso(paciente))
        erros.push("O peso é invalido!");

    if(!validaAltura(paciente))
        erros.push("A altura é invalida!");

    return erros;
}

function imprimeMensagemErro(mensagensError){
        const ulError = document.querySelector("#mensagem-error");
        ulError.innerHTML = "";
        mensagensError.forEach((erro) => {
            console.log(erro);
            const erroLi = document.createElement("li")
            erroLi.textContent = erro;
            ulError.appendChild(erroLi);
        });
}