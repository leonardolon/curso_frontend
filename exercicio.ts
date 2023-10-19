let nu1: number = 6;
let nu2: number = 45;

const Soma = (nu1: number, nu2:number): number => nu1 * nu2

console.log(Soma)

class Pessoa {
    nome: string;

    constructor (nome:string){
        this.nome= 'anderson';
    }

    dizOla(): string{
        return `${this.nome} disse ola`;
    }
}