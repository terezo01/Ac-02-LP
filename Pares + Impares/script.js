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

function calcularWhile(){
    num = parseInt(document.getElementById("num").value);
    p = 0;
    im = 0;
    i =0;

    while(i<=num){
        if(i%2==0){
            p = p + i;
        }
        else{
            im = im + i;
        }
        i++
    }
    document.getElementById("saida").innerHTML = `A soma dos pares são = ${p} <br> A soma dos impares são = ${im}`
}

function calcularDo(){
    num = parseInt(document.getElementById("num").value);
    p = 0;
    im = 0;
    i =0;

    do{
        if(i%2==0){
            p = p + i;
        }
        else{
            im = im + i;
        }
        i++
    }while(i<=num)
    document.getElementById("saida").innerHTML = `A soma dos pares são = ${p} <br> A soma dos impares são = ${im}`
}