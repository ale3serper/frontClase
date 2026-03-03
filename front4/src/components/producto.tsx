
'use client'

import { comprao } from "@/app/page";
import "./product.css"


type Props={
lista: comprao[],
setLista:React.Dispatch<React.SetStateAction<comprao[]>>,
name: string
};


const Product=({lista,setLista,name}:Props)=>{
    return(
        <div className="productillo" onClick={()=>{
            setLista([...lista, {name: name, id: String(Math.random())}])
        }}>
            <h1>{name.toUpperCase()}</h1>
        </div>
    );
}

export default Product;