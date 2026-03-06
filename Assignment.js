function findMax(){
    let a=Number(document.getElementById("num1").value);
    let b=Number(document.getElementById("num2").value);
    let c=Number(document.getElementById("num3").value);

    let max=(a>b)
             ?(a>c ? a:c)
             :(b>c ? b:c);

    document.getElementById("result").innerHTML= "Maximum number is:" +max;
}