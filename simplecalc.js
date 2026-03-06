function calc(){
    let a=Number(document.getElementById("num1").value);
    let b=Number(document.getElementById("num2").value);
    let op=document.getElementById("op").value;
    switch(op){
        case "+":
            result = a+b;
            break;
        case "-":
            result = a-b;
            break;
        case "*":
            result = a*b;
            break;
        case "/":
            result = a/b;
            break;
        default:
            result = "Invalid Operation";
    }
document.getElementById("result").innerHTML="Result:"+result;

}