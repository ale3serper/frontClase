"use client";

import { useRouter } from "next/navigation";




const laotra= ()=>{


    const router= useRouter();

    return(
        <div>
            <h1>Esta es la otra pagina</h1>
            <p onClick={()=>{
                router.back();
            }}>pa atras</p>

        </div>
    );
}

export default laotra;