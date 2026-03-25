'use client'


import { useRouter } from "next/navigation";





const otraPage=()=>{

const router= useRouter();

return(
    <div className="mainContainer">
    <h1 >Esta es la otra pagina </h1>

    <button onClick={(e)=>{router.push("/")}}>volver</button>
    </div>
    
    
)


}

export default otraPage;