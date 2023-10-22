interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  types: string[];
}

interface Description {
  description: string;
  language: {
    name: string;
    url: string;
  };
}

interface CardProps {
  pokemonList: Pokemon[];
  pokemonData: Pokemon;
  pokeChar: {
    descriptions: Description[];
  };
  onSelectPokemon: (pokemonIndex: number) => void;
  description: string;
}

export default function Card({
  pokemonList,
  pokemonData,
  pokeChar,
  onSelectPokemon,
}: CardProps) {
  const englishDescription = pokeChar.descriptions?.find(
    (description) => description.language.name === "en"
  );

  return (
    <div>
      <div className="select-container">
        <select onChange={(e) => onSelectPokemon(Number(e.target.value))}>
          {pokemonList.map((pokemon, index) => (
            <option key={index} value={index + 1}>
              {pokemon?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="card-container">
        <img src={pokemonData.sprites?.front_default} alt="" />
        <p>{englishDescription?.description}</p>
      </div>
      <div className=""></div>
    </div>
  );
}
