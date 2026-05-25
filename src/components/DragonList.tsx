import DragonCard from "./DragonCard";

interface Pokemon {
  name: string;
  url: string;
}
interface Props {
  pokemons : Pokemon[];
}
//Responsive
function DragonList({ pokemons }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 centered font-bold text-black-600"> 
      {pokemons.map((pokemon) => (
        <DragonCard key={pokemon.name} url={pokemon.url} name={pokemon.name} />
      ))}
    </div>
  );
}
export default DragonList;