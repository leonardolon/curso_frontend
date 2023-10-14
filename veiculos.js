function Modelo(nome){
    this.nome= nome;

}

function Carro(nome, marca, preco) {    
    
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
    
    Modelo.call(this, nome);
}

function Ford(nome){
    carro.call(this,nome, "ford", 25000)
}

function Toyota(nome){
    carro.call(this,nome, "Toyota", 25000)                     
}
        

const Carro1 = new Carro("voyage, VW", 15000);
const Carro2 = new Carro("FordKa");
const Carro3 = new Carro("supra");


console.log(Carro1)
console.log(Carro2)
console.log(Carro3)


