'use client'

import { useState } from "react";
import { useLista } from "../context/ListaContext";
import { useRouter } from "next/navigation";


const addToList= ()=>{
    const [inputText, setInputText]= useState("");
    const{addLista}= useLista();
    const router= useRouter();

    return(
        <div>
            <input value= {inputText} onChange={(e)=>{
                setInputText(e.target.value);
            }}
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    addLista(inputText);
                    setInputText("");
                }
            }}></input>
            <button onClick={(e)=>{router.push("/")}}>volver</button>
             <button onClick={(e)=>{router.push("/addToList/laotra")}}>otra</button>
        </div>
    );
}

export default addToList;