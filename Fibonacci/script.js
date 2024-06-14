function calcularFor(){
    num = parseInt(document.getElementById('num').value);
    a = 0;
    b = 1;
    fib = "";
    for(i=0; i<=num - 3; i++){
        res = a + b;
        a = b;
        b = res;
        fib = fib + res  + ", ";
    }
    document.getElementById("saida").innerHTML = `0, 1, ${fib}`;
}

function calcularWhile(){
    num = parseInt(document.getElementById('num').value);
    a = 0;
    b = 1;
    fib = "";
    i=0;
    while(i<=num - 3){
        res = a + b;
        a = b;
        b = res;
        fib = fib + res  + ", ";
        i++;
    }
    document.getElementById("saida").innerHTML = `0, 1, ${fib}`;
}

function calcularDo(){
    num = parseInt(document.getElementById('num').value);
    a = 0;
    b = 1;
    fib = "";
    i=0;
    do{
        res = a + b;
        a = b;
        b = res;
        fib = fib + res  + ", ";
        i++;
    }while(i<=num - 3)
    document.getElementById("saida").innerHTML = `0, 1, ${fib}`;
}