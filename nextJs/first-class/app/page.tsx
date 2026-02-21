import axios from "axios";
import Link from "next/link";

export default async function Home() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details");
  const data = response.data;
  return (
    <div className="flex flex-col gap-4 items-center">
      <br />
      <br />
      <p className="font-bold text-2xl">Welcome to do App</p>
      <Link href="/signin">Go to signin page</Link> 
      <Link href="/signup">Go to signup page</Link>
    </div>
  );
}
