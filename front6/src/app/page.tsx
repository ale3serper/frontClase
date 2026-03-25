'use client'

import { useRouter } from "next/navigation";
import { useLista } from "./context/ListaContext";


const Home=() =>{

  const {lista}= useLista();
  const router= useRouter();

  return (
    <div className="mainContainer">
      <button 
        onClick={()=>{
          router.push("/addToList");
      }}
      >
        Go to addList page
      </button>

     {lista.map((e) => (
      <p key={e}>{e}</p>
      ))}

    </div>
  );
}


export default Home;