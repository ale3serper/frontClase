'use client'

import FilmView from "@/app/components/filmCard";
import { getFilmById } from "@/app/lib/api/filmById";
import { GhibliFilm } from "@/app/type";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./page.css"


const FilmConId=()=>{
    const {id}= useParams();
    const [films, setFilms]= useState<GhibliFilm| null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        if(!id) return;
        setLoading(true);

        getFilmById(String(id))
            .then((e) => setFilms(e.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    
    if (loading) return <p>Cargando película...</p>;
    if (error) return <p>Error: {error}</p>;
    if(!films) return <p>Cargando pelicula...</p>

    return(
        <div className="paginaId">
            
            <Link href="/" className="volver">Volver</Link>
            <FilmView film={films}/>

        </div>
    );

};

export default FilmConId;