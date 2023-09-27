function carro(nome, marca, preco) {    
    this.nome = nome;
    this.marca = marca;

    let _preco = preco;
    
    this.getPreco = function(){
        return _preco;
    }

    this.setPreco = function(valor){
        if (typeof valor === 'number'){
            _preco = valor;
        }    
        
    }
}

const Carro1 = new carro("voyage, VW", 15000);

console.log("carro1")