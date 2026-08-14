function checkNumber(){
    let a=Number(document.getElementById("num").value)
    if(a%2==0){
        a="The number is even";
    }
    else{
        a="The number is odd";
    }
    document.getElementById("result").innerHTML=a;
}