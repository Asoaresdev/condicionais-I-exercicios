const validacoes = (idade, terminouEnsinoMedio, cursaFaculdade) =>{
    if(idade >= 18){
        console.log("A pessoa é maior de idade"); 
    }else{
        console.log("A pessoa é menor de idade");
    }
    if(terminouEnsinoMedio){
        console.log("A pessoa terminou o ensino médio");
    }else{
        console.log("A pessoa Não terminou o ensino médio");
    }
    if(cursaFaculdade){
        console.log("A pessoa cursa faculdade");
    }else{
        console.log("A pessoa Não cursa faculdade");
    }

}
validacoes(44, true, false)