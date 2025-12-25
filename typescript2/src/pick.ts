interface User{
    id:string,
    password:string,
    number : number,
    name:string,
    age:number
}
// it use when you want to user to just upadet some data not everything
type updateProps = Pick<User ,'name' | 'password'|'number'>

// it makes the all property of updatUser  optional 
type upadateUserOptional = Partial<updateProps>

function upadetUser(updateProps:updateProps){
    // call db and do all the logic to upadate
    console.log("name" + updateProps.name );
    console.log("name" + updateProps.number );
    console.log("name" + updateProps.password);
}

upadetUser({
    name:"icwu",
    password:"nkjcn",
    number:723749347
})