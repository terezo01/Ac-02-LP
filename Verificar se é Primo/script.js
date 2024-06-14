function calcularFor(){
    num = parseInt(document.getElementById("num").value);
    contagemDiv = 0;
    for(i=0; i<=num; i++){
        if(num%i==0){
            contagemDiv++;
        }
    }
    if(contagemDiv == 2){
        document.getElementById("saida").innerHTML = `Esse número é primo`;
    }
    else{
        document.getElementById("saida").innerHTML = `Esse número não é primo` ;
    }
}