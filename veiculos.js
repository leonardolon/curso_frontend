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

    this.inflacao = function () {
        const novoPreco = this.getPreco() * 1.1;
        this.setPreco(novoPreco);           
    }
}

function Toyota(nome){
    carro.call(this,nome, "Toyota", 25000)

    this.inflacao = function () {
        const novoPreco = this.getPreco() * 1.1;
        this.setPreco(novoPreco);           
    }
}
        

const Carro1 = new Carro("voyage, VW", 15000);
const Carro2 = new Carro("FordKa");
const Carro3 = new carro("supra");

Carro1.inflacao();
console.log(Carro1)

Carro2.inflacao();
console.log(Carro2)

Carro3.inflacao();
console.log(Carro3)

