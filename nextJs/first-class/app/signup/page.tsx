"use client"
import axios from "axios"
import { useRouter } from "next/navigation";
import { useRef } from "react"

export default function Signup() {
    const userRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const Route = useRouter();
    return <div className="flex flex-col items-center gap-5">
        <br />
        <p className="font-medium text-2xl">Sign in page</p>
        <input ref={userRef} className="border p-2 rounded-lg outline-none" type="text" placeholder="Enter your name" />

        <input ref={passwordRef} className="border p-2 rounded-lg outline-none" type="text" placeholder="Enter your password" />

        <button onClick={async() => {
            console.log(userRef.current?.value );
            console.log(passwordRef.current?.value);
            await axios.post("http://localhost:3000/api/v1/signup" , {
                user:userRef.current?.value ,
                password:passwordRef.current?.value
            })
            Route.push("/signin")
        }}
        className="border p-2 rounded-lg outline-none">submit</button>
    </div>
}