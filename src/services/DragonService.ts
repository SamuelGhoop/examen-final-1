

export async function fetchPokemon(){
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); //Profe 151 porque mew tenia que ir
if(!response.ok){
        throw new Error("Error al obtener los Pokemones");
    }
   const data = await response.json();

   return data.results;
}

export async function fetchPokemonByName(name: string){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if(!response.ok){
        throw new Error("Error al obtener el Pokemon");
    }
    const data = await response.json();
    return data;
}