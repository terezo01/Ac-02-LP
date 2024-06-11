function calcularFor(){
    num = parseInt(document.getElementById('num').value);
    a = 0;
    b = 1;
    for(i=0; i<=num; i++){
        res = a + b
        a = b
        b = res
        fib = fib + res + ","
    }
    document.getElementById("saida").innerHTML = fib
}
