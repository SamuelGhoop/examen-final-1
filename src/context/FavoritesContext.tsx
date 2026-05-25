  import { createContext,useContext,useState } from "react";
import DragonCard from "../components/DragonCard";

  interface Pokemon{
      name: string,
      url: string
  }

  interface FavoritesContextType{
      favorites : Pokemon[]
      addFavorite : (pokemon : Pokemon) => void            
      removeFavorite : (pokemonId : string) => void
      isFavorite : (pokemonId : string) => boolean
  }

  const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

  export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<Pokemon[]>([]);

    function addFavorite(pokemon: Pokemon) {
      setFavorites(prev => {
        if (prev.some(f => f.name === pokemon.name)) return prev; //Si ya está no lo duplica
        return [...prev, pokemon]; 
      });
    }

  function removeFavorite(pokemonName: string){
    setFavorites(prev => prev.filter(f => f.name !== pokemonName))
  }

  function isFavorite(pokemonName : string){
    return favorites.some(f => f.name === pokemonName)
  }

  return (

  <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
        {children}
      </FavoritesContext.Provider>
    );
  }

  export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
    return context;
  }