import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

interface Pokemon {
  name: string;
  url: string;
}

function DragonCard({name,url}: Pokemon) {
    const {addFavorite, isFavorite, removeFavorite} = useFavorites();
    const id = url.split("/").filter(Boolean).pop();
const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="rounded-lg border p-4 shadow">
      <Link to={`/pokemon/${name}`}>
        <h2 className="text-2xl centered font-bold text-black-600">{name}</h2>
      </Link>
        <img src={imageUrl} alt={name} />   

        <button onClick={() => {
        if(isFavorite(name)){
          removeFavorite(name)
        }
        else{
          addFavorite({name, url })
        }
      }}>
        <FaHeart color = {isFavorite(name) ? "red" : "gray"} />
      </button>     
    </div>
  );
}
export default DragonCard;