import { useEffect, useState } from "react";
import { fetchPokemon } from "../services/DragonService";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";
import DragonCard from "../components/DragonCard";
import DragonList from "../components/DragonList";

interface Pokemon {
 name: string,
 url: string
}

function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  
  const filteredPokemon = pokemon.filter(pokemon =>
  pokemon.name.toLowerCase().includes(search.toLowerCase()) //ir buscando
);

 async function loadPokemon() {
  try {
    setLoading(true);
    setError("");
    const data = await fetchPokemon();
    setPokemon(data);
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Error desconocido";
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  loadPokemon();
}, []);
  return (
    <div className="p-4">
      <h1 className="text-5xl centered font-bold text-red-600">
        Los primeros 151 pokemon
      </h1>
       {loading && <Loader />}
      {!loading && error && <ErrorMessage message={error} onRetry={loadPokemon} />}
      {!loading && !error && pokemon.length === 0 && <EmptyState message="No se encontraron Pokemon" />}
      {!loading && !error && pokemon.length > 0 && (
        <div>
          <center><SearchBar value={search} onChange={setSearch} />
          <DragonList pokemons={filteredPokemon} />
          </center>
        </div>
        
      )}
      
    </div>
  );
}

export default Home