/* JavaScript da Atividade002 da parte JS */

/* 
    metodos para vetores/arrays

    puch() -> adiciona um valor no final do vetor/array
    pop() -> remove o ultimo valor do vetor/array
    shift() -> remove o primeiro valor do vetor/array
    unshift() -> adiciona um valor no inicio do vetor/array
    indexOf() -> pesquisa o indice do valor pesquisado
    splice() -> 
    
    let array = ['1', '2', '3', '4']
    array.splice(2, 1, 'emanoel')

    - primeiro valor indica onde a posicao inicial;
    - segundo valor indica quantidade de valores seguintes que quero remover;
    - terceiro valor indica o que eu quero colocar no local dos valores removidos.
*/

//
// quest: Faça uma lista/array de elementos imprima seu tamanho, e seus elementos após utilizar pelo menos 3 métodos (push, shift, pop, indexOf, etc)
//

let vetorsinho = ['valorsinho0', 'valorsinho1', 'valorsinho2', 'valorsinho3'];

console.log('----------');

console.log('Tamanho:')
console.log(vetorsinho.length);

console.log('----------');

console.log('Elementos:')
console.log(vetorsinho);

console.log('----------');

console.log('Adicionando um Elemento:');
vetorsinho.push('valorsinho4'); // adiciona + 1 ao final
console.log(vetorsinho);

console.log('----------');

console.log('Removendo o Elemento 0:');
vetorsinho.shift(); // remove o primeiro valor
console.log(vetorsinho);

console.log('----------');

console.log("Procurando indice do elemento 'valorsinho2':");
console.log(vetorsinho.indexOf('valorsinho2')); // exibe o inice do valor pesquisado

console.log('----------');

/* Adicionamos, Removemos um do inicio e procuramos */
