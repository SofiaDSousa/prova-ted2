export function criarPilha (tamanho = 10){
    return [ ...new Array(tamanho)]
}

export function inserirItemPilha (pilha,item){
   const spacePosition = pilha.indexOf(undefined);
   if(spacePosition === -1){
    console.log("Esta cheio");
    return; 
   }    
    
   pilha[spacePosition] = item;
}

export function retirarItemPilha (pilha) {

if(pilha[0] === undefined){
    console.log("pilha vazia");
    return;
}
}
    export function procurarItem(pilha,item){
        for(let i = 0; i< pilha.length; i++){
            if(pilha[i].titulo === item){
                console.log("titulo encontrado"+item.titulo);
                
        }
        else{
            console.log("não encontrado");
        }
    }


}
