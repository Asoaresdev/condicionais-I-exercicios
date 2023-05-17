const verificaPar =(num) =>{
    const numero =num
    if(numero % 2 ===0){
        return `O numero ${numero} é par`
    }else{
        return `O numero ${numero} é impar`
    }
}
console.log(verificaPar(11));


console.log("==========OUTRA MANEIRA=========");

const numeroQualquer = 40

function verificaPar2(numero){
    if(numero % 2 ===0){
        return `O numero ${numero} é par`
    }
}

console.log(verificaPar2(numeroQualquer));