// Sistema de cadastro de eventos;

let listaParticipantes = ["Júlia", "José", "Maria", "João", "Pedro"];

let quantidadeParticipantes = listaParticipantes.length;

console.log("Insira a data do evento:");
let dataEvento = new Date('02/20/2022');
console.log(dataEvento);
let dataAtual = new Date();

if (dataEvento >= dataAtual) {
    console.log("Evento Válido");

    if (quantidadeParticipantes < 100) {
    
        console.log("Insira a idade do participante:");
        let idadeParticipante = 20;
        console.log(idadeParticipante);
    
        if (idadeParticipante > 18) {
            console.log("Participante cadastrado!")
        } else {
            console.log("Erro: participante não tem mais de 18 anos!")
        };
    } else{
        console.log("Erro: o evento tem mais de 100 participantes");
    }
} else {
    console.log("Evento inválido");
};

for (let index = 0; index < quantidadeParticipantes; index++) {
    console.log(listaParticipantes[index]);
};