'use client'

import "./page.css";
import { useEffect, useState } from "react";

import { Cocktail } from "./types";
import CocktailCard from "./components/cocktailCard";
import { searchCocktailByName } from "./lib/api/cocktailByName";

const Home = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [inputName, setName] = useState<string>("");

  useEffect(() => {
    if (!search) {
      setCocktails([]);
      return;
    }

    setLoading(true);
    setError(null);

    searchCocktailByName(search)
      .then((e) => {
        setCocktails(e.data.drinks ?? []);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  return (
    <main className="container">
      <h1 className="main-title">
        Lista de Cocktails
      </h1>

      <div className="search-container">
  <input
    className="search-input"
    value={inputName}
    onChange={(e) => setName(e.target.value)}
  />
  <button
    className="search-button"
    onClick={() => setSearch(inputName)}
  >
    Buscar
  </button>
</div>

      {error && <p>El error es: {error}</p>}
      {loading && <p>Cargando...</p>}

      <div className="grid">
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;