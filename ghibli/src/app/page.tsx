'use client'

import { useEffect, useState } from "react";
import { GhibliFilm } from "./type";
import { getFilmsByName } from "./lib/api/filmsByName";
import FilmView from "./components/filmCard";
import { getAllFilms } from "./lib/api/allFilms";
import FilmPanel from "./components/filmpanel";
import "./page.css"
import { useRouter } from "next/navigation";





const Home=() =>{
  const [film, setFilm]= useState<GhibliFilm|null>(null);
  const [films, setFilms]= useState<GhibliFilm[]|null>([]);
  const[loading, setLoading]= useState(false);
  const[error, setError]=useState<string|null>(null);
  const[search, setSearch]= useState<string>("");
  const[name, setName]= useState<string>("");
  const router = useRouter();

 
  useEffect(()=>{
    if (!search){
      setFilm(null);
      return;
    }

    setLoading(true);
    setError(null);

    getFilmsByName(search).then((e)=>{
      router.push(`/film/${e.id}`);

    }).catch((err)=>{
      setError(err.message);

    }).finally(()=>{
      setLoading(false);
    });
  },[search]);

  const cargarPelis=()=>{
    setLoading(true);
    setError(null);
    setFilm(null);

    getAllFilms().then((e)=>setFilms(e)).catch((err)=>{
      setError(err.message);

    }).finally(()=>{
      setLoading(false);
    });
  };
  


  return (
    <div className="mainContainer">
     <h1 className="titulo">Peliculas del Estudio Ghibli</h1>

     <div className="contenedorBuscar">
      <input className="buscar"
        value={name}
        onChange={(e)=> setName(e.target.value)}
      />
    <div className="botonesContainer">
      <button className="botonBuscar"
       onClick={()=>{setSearch(name)}}>Buscar</button>

      <button className="botonAllFilms"
       onClick={()=>cargarPelis()}>Todas las peliculas</button>
     </div>
    </div>
      

      {error && <p>El error es: {error}</p>}
      {loading && <p>Cargando...</p>}

      {film && (
        <div className="peliculas">
          <FilmView key={film.id} film={film} />
        </div>
      )}

      {!film && films && films.length > 0 && (
        <div className="Allpeliculas">
          {films.map((f) => (
            <FilmPanel key={f.id} film={f} />
          ))}
        </div>
      )}


    </div>
  );
}

export default Home;