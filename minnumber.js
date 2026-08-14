function findMin(){
    let a=Number(document.getElementById("num1").value);
    let b=Number(document.getElementById("num2").value);
    let c=Number(document.getElementById("num3").value);

    let min=(a<b)
            ?(a<c?a:c)
            :(b<c?b:c);
    
    document.getElementById("result").innerHTML="Minimum number is:" +min;
}