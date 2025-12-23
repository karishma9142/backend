interface Admin{
    name : string,
    permissions : string
}

interface User{
    name : string ,
    id : string
}

// 1.   union types 

// type Status = "success" | "error" | "loading";

function greet (input : Admin | User) : void{
    console.log("hello " + input.name);
}

let admin : Admin = {
    name : "admin",
    permissions : ""
}

let user : User = {
    name : "user" ,
    id : ""
}

greet(admin);
greet(user);