const tabelaPaciente = document.querySelector("#tabela-pacientes");

tabelaPaciente.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fade-out");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 250);
    //
});