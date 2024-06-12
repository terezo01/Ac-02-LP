function calcularFor(){
    num = parseInt(document.getElementById('num').value);
    a = 0;
    b = 1;
    fib = ""
    for(i=0; i<=num - 3; i++){
        res = a + b
        a = b
        b = res
        fib = fib + res  + ", "
    }
    document.getElementById("saida").innerHTML = `0, 1, ${fib}`
}
