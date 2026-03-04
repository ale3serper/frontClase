
import { api } from "./axios"








export const getFilmsByName=async (title:string)=>{
    
    try{
        const response= await api.get(`https://ghibliapi.dev/films/`);
        const films=response.data;


        const film= films.find((f: {title:string})=> 
            f.title.toLowerCase() === title.toLowerCase().trim()
         );

        return film || null;

    }catch(error){
        console.log(error);
        return null;
    }
    

}