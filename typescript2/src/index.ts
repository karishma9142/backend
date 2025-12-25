interface User{
    name:string,
    age:number
}
function addAge(user1:User , user2:User):number{
    return user1.age+user2.age;
}

let user1:User={
    name : "nckj",
    age : 18
}
let user2:User={
    name : 'nie',
    age:38
}
console.log(addAge(user1,user2));


// you can change the internal value of const not variable 
// const a = [1,3,2,2];
// a[0]=5;

// but not the variable itself
// const b=9;
// b=3;