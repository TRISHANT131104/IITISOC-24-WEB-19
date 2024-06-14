'use client'
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import { signIn,useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
export default function Home() {
  const {data:session} = useSession()
const router= useRouter()
if(session){
  router.replace('/Signup')
  return null 
}
  return (
<div>
  <Navbar1/>
  <Navbar2/>
  <div className="min-h-[75vh] bg-gray-200">
  <div> 
    <h2>Login with Google</h2>
    <button onClick={() => {
      signIn("google")
    }
    }>Login</button></div>
  </div>
  <Footer/>
</div>
  );
}
