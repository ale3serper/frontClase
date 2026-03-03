"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCocktailById } from "@/app/lib/api/cocktailById";
import { Cocktail } from "@/app/types";

const CocktailDetail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    getCocktailById(String(id))
      .then((e) => {
        const cocktailData = e.data.drinks;
        if (cocktailData && cocktailData.length > 0) {
          setCocktail(cocktailData[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!cocktail) return <p>Cargando cocktail...</p>;

  return (
    <div className="detail-container">
      <Link href="/">
        ← Volver al inicio
      </Link>

      <h1 className="detail-title">{cocktail.strDrink}</h1>

      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="detail-image"
      />

      <p className="detail-text">{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetail;