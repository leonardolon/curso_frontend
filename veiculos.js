function Modelo(nome){
    this.nome= nome;
}

function Carro(nome, marca, preco) {    
    
    this.marca = marca;

    this.preco= preco;
    
    
    Modelo.call(this, nome);
}

function Ford(nome){
    Carro.call(this,nome, "ford", 25000)
    
}

function Toyota(nome){
    Carro.call(this,nome, "Toyota", 25000)  
    
}
        
    }
}

const Carro1 = new Carro("voyage, VW", 15000);

console.log(Carro1)