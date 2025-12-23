interface User{
    firstName : string;
    lastName : string;
    age : number;
}

function filterUser(users: User[]): User[] {
    let ans: User[] = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i]!.age >= 18) { // users[i]! => This tells TS: “Trust me, it exists” use when you 100% sure (use fillter)
            ans.push(users[i]!);
        }
    }

    return ans;
}


const fillteredUser = filterUser([{
    firstName : "karishm",
    lastName : "rawat",
    age : 19
},
{
    firstName : "anvi",
    lastName : "patel",
    age : 5
}])

console.log(fillteredUser);