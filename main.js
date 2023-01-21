$(document).ready(function(){
    $("header button").click(function(){
         $("form").slideDown();
    })

    $("#botao-cancelar").click(function(){
        $("form").slideUp();
    })
    
})

const form = document.getElementById("form-tarefa");
let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    const inputNomeTarefa = document.getElementById("tarefa");
    

    let linha = "<li>";
    linha += `<a> ${inputNomeTarefa.value}</a>`;    
    linha += "</li>";

    linhas += linha;

    const corpoTabela = document.querySelector("a");
    corpoTabela.innerHTML = linhas;
    
    inputNomeTarefa.value = "";
    

});