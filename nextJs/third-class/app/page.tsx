
import { getServerSession } from "next-auth";


export default async function Home(){
  const session = await getServerSession();
  return <div>
    {JSON.stringify(session)}
  </div>
}

// function RealHome() {
//   const session = useSession();
//   return (
//     <div>
//       {session.status === "authenticated" && <button onClick={()=>signOut()}>Logout</button>}
//       {session.status === "unauthenticated" && <button onClick={()=>signIn()}>Sign in</button>}
//     </div>
//   );
// }
