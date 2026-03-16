'use client'

import { useRouter } from "next/navigation";
import "./ContainerBackHome.css"


type Props={
    children: React.ReactNode;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ContainerBackHome= ({ children, setShowModal }: Props)=>{


    

    return(
        <div className="container" onClick={()=>{setShowModal(false)}}>
           
            <div className="innerContainer"onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    );
}


export default ContainerBackHome