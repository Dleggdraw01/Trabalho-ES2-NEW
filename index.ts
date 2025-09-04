import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro)
            break;
        case 3:
            subirMarcha(carro)
            break;
        case 4:
            descerMarcha(carro)
            break
        case 5:
            imprimirDados(carro)
        break
        default:
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(1)} km/h`)
    }else{
    console.log("O veículo está em ponto morto. Engate uma marcha para acelerar!")
  }
}

function frear(veiculo: Veiculo):void{
    if (veiculo.velocidade > 0){
        veiculo.velocidade = Math.max(0, veiculo.velocidade - veiculo.potencia * 0.1)
        console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(1)} km/h`)
    } else {
        console.log("O veículo já está parado!")
    }
}

function subirMarcha(veiculo:Veiculo):void{
    if(veiculo.marchaAtual - veiculo.numeroMarchas){
        veiculo.marchaAtual++
        console.log(`Marcha atual: ${veiculo.marchaAtual}`)
    }else{
        console.log("Já está na marcha mais alta!")
    }
}

function descerMarcha(veiculo:Veiculo):void{
    if (veiculo.marchaAtual > 0){
        veiculo.marchaAtual--
        console.log(`Marcha atual: ${veiculo.marchaAtual}`)
    }else{
        console.log("Já está em ponto morto!")
    }
}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}


