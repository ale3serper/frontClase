import { api } from "./axios"








export const getAllFilms = async ()=>{
    const response= api.get(`https://ghibliapi.dev/films`);
    return (await response).data
};

