

import { GhibliFilm } from "../type";
import "./filmCard.css"





interface Props{
    film: GhibliFilm
};

const FilmView=({film}:Props)=>{
    
   
    return(
       <div className="filmcard">

        <h1 className="filmTitle">{film.title}</h1>
        <img src={film.image}/>
        <p className="releaseDate">Año de salida: {film.release_date}</p>
        <p className="director">Director: {film.director}</p>
        <p className="description">Descripcion: {film.description}</p>
        <p className="rtscore">Rating: {film.rt_score}/100</p>
        
        
       </div> 
    );
};


export default FilmView;