import Link from "next/link";
import { Cocktail } from "../types";
import "./page.css";

interface Props {
  cocktail: Cocktail;
}

const  CocktailCard=({ cocktail }: Props)=> {
  return (
    <Link href={`/cocktail/${cocktail.idDrink}`}>
      <div className="card">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <h2>{cocktail.strDrink}</h2>
      </div>
    </Link>
  );
}

export default CocktailCard;