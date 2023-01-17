const form = document.getElementById("form_formulario");

form.addEventListener('submit', function(e){

    e.preventDefault();

    const A = document.getElementById('A');
    const B = document.getElementById('B');

    if(B>A){
        alert("parabens esta tudo certo");
    }else{
        alert("O valor do segundo campo e menor que o do primeiro");
    }

})

console.log(form);