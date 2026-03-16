"use client"
import { TextInput } from "@repo/ui/text-input"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  return <div style={{
    width: '100vw',
    height: "100vh",
    background: "black",
    display: "flex",
    justifyContent: "center",
    alignItems : "center"
  }}>
    <div>
      <TextInput placeholder="room name"></TextInput>
      <button 
      onClick={()=>{
        router.push("/chat/12")
      }}
      >join room</button>
    </div>
  </div>
}