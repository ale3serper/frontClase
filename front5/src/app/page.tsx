'use client'

import { useState } from "react";
import ContainerBackHome from "./components/ContainerBackHome";


const  Home= () =>{
  const [showModal, setShowModal]=useState(false)

  return (
    <div className="mainContainer">

     <h1>Nuestra paginita</h1>
     
     <button onClick={()=>{setShowModal(true)}}>abrir</button>

      {showModal && (
        <ContainerBackHome setShowModal={setShowModal}>
          <h1>Pagina epica</h1>
          <p>hola holita</p>
        </ContainerBackHome>
      )}

    </div>
  );
}



export default Home;