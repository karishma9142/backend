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