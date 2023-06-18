function greet(name: string) {
    console.log(`olá, ${name}!!`);
}

greet('Marcello');

/*
VAI DAR ERRO PQ NÃO É STRING
 greet(20)
*/

function dobleNumber(number: number) {
    return number * 2;
}

const resultado = dobleNumber(3);
console.log(resultado);
