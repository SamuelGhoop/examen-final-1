import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemonByName } from "../services/DragonService";
import { useFavorites } from "../context/FavoritesContext";
import { FaArrowLeft, FaHeart } from "react-icons/fa";

interface PokemonType {
  type: { name: string };
}

interface PokemonAbility {
  ability: { name: string };
}

interface PokemonStats{
  stats : { stat: number}
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": { front_default: string };
    };
  };
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats : PokemonStats[];
}

function DragonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    setError(null);
    fetchPokemonByName(name)
      .then((data) => setPokemon(data))
      .catch((e) => {
        const msg = e instanceof Error ? e.message : "Error desconocido";
        setError(msg);
      })
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) return <p className="p-4">Cargando...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!pokemon) return <p className="p-4">Pokemon no encontrado</p>;

  const image =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600 inline-flex items-center gap-2">
        <FaArrowLeft /> Volver
      </Link>

      <h1 className="text-3xl font-bold capitalize mt-2">
        #{pokemon.id} {pokemon.name}
      </h1>

      <button onClick={() => {
        if (isFavorite(pokemon.name)) {
          removeFavorite(pokemon.name);
        } else {
          addFavorite({ name: pokemon.name, url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/` });
        }
      }}>
        <FaHeart color={isFavorite(pokemon.name) ? "red" : "gray"} />
      </button>

      <img src={image} alt={pokemon.name} className="w-48 h-48" />

      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>

      <div>
        <strong>Tipos:</strong>{" "}
        {pokemon.types.map((t) => t.type.name).join(", ")}
      </div>

      <div>
        <strong>Habilidades:</strong>{" "}
        {pokemon.abilities.map((a) => a.ability.name).join(", ")}
      </div>
      <div>
        <strong>Estadisticas:</strong>{" "}
        {pokemon.stats.map((a) => a.stats.stat).join(", ")}
      </div>
    </div>
  );
}

export default DragonDetail;
