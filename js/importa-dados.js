const btnPaciente = document.querySelector("#importar-paciente");
btnPaciente.addEventListener("click", function(){

    const xhr = new XMLHttpRequest();

    //função para abrir a requisição
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //adicionando um evendo para tratar o response
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            const error = document.querySelector("#response-error");
            error.classList.add("hidden");
            console.log(xhr.responseText);

        //Transformando de um json para um obj
        const pacientes = JSON.parse(xhr.responseText);
        pacientes.forEach((paciente) => {
            adcionaPacienteTabela(paciente);
        });
        }else{
            console.log("Status da api: " + xhr.responseText)
            const error = document.querySelector("#response-error");
            error.classList.remove("hidden");
        }
        
    })

    //função de enviar requisição
    xhr.send();
})