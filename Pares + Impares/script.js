function calcularFor(){
    num = parseInt(document.getElementById("num").value);
    p = 0;
    im = 0;
    for(i=0; i<=num; i++){
        if(i%2==0){
            p = p + i;
        }
        else{
            im = im + i;
        }
    }
    document.getElementById("saida").innerHTML = `A soma dos pares são = ${p} <br> A soma dos impares são = ${im}`
}