function generaterandomInteger(min,max){
    return n=Math.random()*(100-1)+1;
}

do{
    let numero=prompt("Inserisci un numero: " );
    numero=numero.sanitizeN()
    let tentativi=tentativi+1;

}while(numero===n|tentativi===5)