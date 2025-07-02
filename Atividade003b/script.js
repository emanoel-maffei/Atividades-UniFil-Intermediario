/* JavaScript da Atividade003 da parte JS */
/* http://127.0.0.1:5500/Atividade003b/atividade003b.html */

/* 

    ensinamentos da aula: undefined

*/

//
// 
//

const nome = prompt("Qual seu nome?");

let notas = [];
notas.push(prompt('Qual sua nota no 1° Trimestre'));
notas.push(prompt('Qual sua nota no 2° Trimestre'));
notas.push(prompt('Qual sua nota no 3° Trimestre'));

/* para exemplo sem necessidade de web-sites: */

// notas.push(1);
// notas.push(2);
// notas.push(3);

alert(`notas: ${notas}`);

let media = (Number(notas[0]) + Number(notas[1]) + Number(notas[2])) / 3;
alert(`Média: ${media}`)

if (media >= 60) {
    alert('Aprovado');
} else if (media) {
    alert('Recuperação');
} else {
    alert('Reprovado');
}