//      interface
// An interface in TypeScript is used to define the structure (shape) of an object.
interface userType {
    name:string,
    age : number,
    address : {
        streetName : string,
        houseNo : number
    }
}
function greet(user : userType) {
    console.log("hello " + user.name);
    console.log(user.address.streetName);
}

let user : userType = {
    name : "karishm",
    age : 18 ,
    address : {
        streetName : "neelbad" ,
        houseNo : 257
    }
}
greet(user);

//    type
 
type studentType = {
    name : string , 
    age : number
}

function sayHello (student : studentType){
    console.log("hello " + student.name)
}
let student : studentType = {
    name : "karishma" ,
    age : 19
}
sayHello(student);


// a data type defines the kind of values a variable can hold

// things that make type powerful 
// 1.   union types 

type Status = "success" | "error" | "loading";

// 2.  Intersection Types

type Person = {
    name: string;
};

type Student = Person & {
    rollNo: number;
};

//  3.  Type for Primitives

type ID = string | number;

let userId: ID;
userId = 101;     // ✅
userId = "A12";   // ✅


