"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";




const Home=()=> {



  const router= useRouter();

  return (
    <div>
      <h1>Helloooouu!</h1>
      <Link href="/laotra"> Si pinchas aqui te lleva a la otra</Link>
    
      <img src="/foto.jpg"
      onClick={()=>{
        router.push("/laotra");
      }}/>
    </div>
  );
}
export default Home