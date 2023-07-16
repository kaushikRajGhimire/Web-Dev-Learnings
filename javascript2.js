// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

function ab()
{
    for(var i=0;i<15;i++)
    console.log(i);
    console.log(i);
}
ab();

var a=[1,2,3,4];
var b=[...a];
console.log(a);
console.log(b);

//forEach loop

var a=[1,2,3,4,5,6,7,8,9];
 a.forEach(function(value){
     console.log(value+2);
 })
 //object creation
 var obj={
     name:"kaushik",
     age: 20,
     city: "Kathmandu"
 }
 for(var key in obj)
 {
     console.log(key,obj[key]); // console.log(key);
 }
 
 //callback function asynchronous javascript
 setTimeout(function(){
     console.log("hahaha");
 },3000);
 //first-class funtion    REVISE A LOT LOT LOT
 function krg(a)
 {
     a();
 }
 krg(function(){
     console.log("kaushik raj ghimire");
 });
 //array is object so negative indexing is also possible
 var arr=[1,2,3,4,5,6];
 arr[-2]=10;
 console.log(arr);
 
 
 