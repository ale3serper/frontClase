import { api } from "./axios";






export const getFilmById = async (id: string)=>{
    const response= api.get(`https://ghibliapi.dev/films/${id}`);
    return response
};