'use client'


import Product from "@/components/producto";
import { useState } from "react";
 export type comprao={
    name: string;
    id:string;
  }

const Home= ()=> {

 

  const [lista,setLista]= useState<comprao[]>([]);
  const productos=["bratz","monsterHigh","barbie","lalaloopsy"]
  
  return (
   <div className="mainContainer">
     {lista.map(e=>(
      <h2 key="e.id">{e.name}</h2>
     ))}
     {productos.map((e)=>(
      <Product key={e} name={e} lista={lista} setLista={setLista}/>
     ))}
    
   </div>
  );
}


export default Home;