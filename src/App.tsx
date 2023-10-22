import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokeChar, setPokeChar] = useState([]);

  console.log(pokeChar);

  useEffect(() => {
    async function fetchListOfPokemon() {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching the list of Pokemon:", error);
      }
    }

    fetchListOfPokemon();
  }, []);

  useEffect(() => {
    async function fetchPokemonData() {
      const api_Url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
      try {
        const response = await fetch(api_Url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching the pokemnon Characteristics:", error);
      }
    }

    fetchPokemonData();
  }, [pokemonNumber]);

  useEffect(() => {
    async function fetchPokeChar() {
      const api_Url = `https://pokeapi.co/api/v2/characteristic/${pokemonNumber}`;
      try {
        const response = await fetch(api_Url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPokeChar(data);
      } catch (error) {
        console.error("Error fetching the Pokemon Characteristics:", error);
      }
    }

    fetchPokeChar();
  }, [pokemonNumber]);

  function handleSelectPokemon(number) {
    setPokemonNumber(number);
  }

  return (
    <div className="poke-app">
      <Card
        pokemonList={pokemonList}
        pokemonData={pokemonData}
        pokeChar={pokeChar}
        onSelectPokemon={handleSelectPokemon}
      />
    </div>
  );
}

export default App;
