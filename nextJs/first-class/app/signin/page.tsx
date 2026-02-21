export default function Signin(){
    return (
        <div className="flex flex-col items-center gap-5">
            <br />
            <p className="font-medium text-2xl">Sign in page</p>
            <input className="border p-2 rounded-lg outline-none" type="text" placeholder="Enter your name" />
            
            <input className="border p-2 rounded-lg outline-none" type="text" placeholder="Enter your password"/>
            
            <button className="border p-2 rounded-lg outline-none">submit</button>
        </div>
    )
}