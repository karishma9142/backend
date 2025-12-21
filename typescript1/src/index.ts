// let i : number = 1;
// console.log(i);
//  numder string any

function greet(name : string){
    console.log("Good Moning " + name);
}
function sum(num1:number , num2:number){
    return num1+num2;
}
console.log(sum(2.3,3));
greet("karishma");

function delay(fn:()=>void){
    setTimeout(fn,10000);
}
function fn(){
    console.log("hello");
}
delay(fn);