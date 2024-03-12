import  {criarPilha, inserirItemPilha, retirarItemPilha, procurarItem}  from './pilha.js'


let alunos = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]
console.log("oi")

const pilha = criarPilha(5);

console.log ("Pilha inicial:",pilha);

inserirItemPilha(pilha, {
    titulo: "Histórinhas de terror para crianãs",
    paginas: 50,
    genero: "clássico",
})

inserirItemPilha(pilha, {
    titulo: "IT a coisa",
    paginas: 150,
    genero: "terror",
})

inserirItemPilha(pilha,{
    titulo: "Jason",
    paginas: 70,
    genero: "terror",
})

inserirItemPilha(pilha,  {
    titulo: "Chapéuzinho Vermelho",
    paginas: 10,
    genero: "clássico",
})

inserirItemPilha(pilha, {
    titulo: "Histórinhas de terror para crianãs",
    paginas: 50,
    genero: "clássico",
})

procurarItem(pilha,"Histórinhas de terror para crianãs");

console.log ("Pilha final:",pilha);

retirarItemPilha(pilha);

console.log ("Pilha final2:",pilha);







