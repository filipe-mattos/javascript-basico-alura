const filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function(){
    console.log(this.value);
    const pacientes = document.querySelectorAll(".paciente");
    console.log(pacientes);
    if(this.value.length > 0){
        pacientes.forEach((paciente) => {
            const nomePaciente = paciente.querySelector(".info-nome");
            const regexp = new RegExp(this.value, "i");
            console.log(nomePaciente.textContent);
            if(!regexp.test(nomePaciente.textContent)){
                paciente.classList.add("hidden");
            }else{
                paciente.classList.remove("hidden");
            }
        });
    }else{
        pacientes.forEach((paciente) => {
            paciente.classList.remove("hidden");
        })
    }
})