/*var myinfo= new Array();
var myinfo1=Array();
console.log(myinfo, myinfo1);*/

let collection=[
    {},
    [],
    true,
    "John",
    function() {},
    8653769399840,
    undefined,
    null,
    new String("abc"),
    new Date()
];
console.log(collection);
collection.teachername="John mac";
collection.phoneno=8963969398;
console.log(collection);

var trainerinfo=["mahesh",32,"ghaziabad",{isMarried:true}];
console.log(trainerinfo);

console.log(trainerinfo[0]);
console.log(trainerinfo[1]);
console.log(trainerinfo[2]);
console.log(trainerinfo[trainerinfo.length-1]);
console.log(trainerinfo.lenght);
trainerinfo.contact=6878579371;
console.log(trainerinfo);
trainerinfo[0]="Suhani";
console.log(trainerinfo);
console.log(trainerinfo.length);