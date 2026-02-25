import {CocktailResponse} from "@/app/types"
import {api} from "./axios"


export const getDrinkById= async (id: number)=>{
    const response= await api.get<CocktailResponse>(`/lookup.php?i=${id}`);
    return response.data.drinks
}

export const getDrinkByName= async (name:string)=>{
    const response= await api.get<CocktailResponse>(`/search.php?s=${name}`);
    return response.data.drinks;
}