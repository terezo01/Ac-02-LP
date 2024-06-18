function calcularFor(){
    num = parseInt(document.getElementById('num').value);
    num1 = document.getElementById("num").value;
    a = 0;
    b = 1;
    fib = "";

    for(i=0; i<num - 2; i++){
        res = a + b;
        a = b;
        b = res;
        fib = fib + res  + ", ";
    }

    if(num < 2 || num1 == ""){
        alert("Escreva um número maior que 1")    
    }
    else{
        document.getElementById("saida").innerHTML = `0, 1, ${fib}`;
    }
}

function calcularWhile(){
    num = parseInt(document.getElementById('num').value);
    num1 = document.getElementById("num").value;
    a = 0;
    b = 1;
    fib = "";
    i=0;

    while(i<num - 2){
        res = a + b;
        a = b;
        b = res;
        fib = fib + res  + ", ";
        i++;
    }

    if(num < 2 || num1 == ""){
        alert("Escreva um número valido")    
    }
    else{
        document.getElementById("saida").innerHTML = `0, 1, ${fib}`;
    }
}

function calcularDo(){
    num = parseInt(document.getElementById('num').value);
    num1 = document.getElementById("num").value;
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
    }while(i<num - 2)

    if(num < 2 || num1 == ""){
        alert("Escreva um número valido")    
    }
    else{
        document.getElementById("saida").innerHTML = `0, 1, ${fib}`;
    }
}