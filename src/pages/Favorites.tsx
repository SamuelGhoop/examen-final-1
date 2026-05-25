import EmptyState from "../components/EmptyState";
import DragonList from "../components/DragonList";
import { useFavorites } from "../context/FavoritesContext";

function Favorite() {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-6xl font-bold text-red-600">
        Mis Favoritos
      </h1>
      {favorites.length === 0 && <EmptyState message="No tienes favoritos aún" />}
      {favorites.length > 0 && <DragonList pokemons={favorites} />}
    </div>
  );
}

export default Favorite;