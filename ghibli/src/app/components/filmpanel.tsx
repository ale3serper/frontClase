

import Link from "next/link";
import { GhibliFilm } from "../type";
import "./filmpanel.css"


interface Props{
    film: GhibliFilm
};



const FilmPanel=({film}:Props)=>{
    
    

    return(

       <Link href={`/film/${film.id}`} className="filmpanel">
      <h1 className="filmTitle">{film.title}</h1>
      <img
        src={film.image || film.movie_banner}
        alt={film.title}
      />
      <p>{film.description.slice(0, 100)}...</p>
    </Link>
         
    );
};


export default FilmPanel;