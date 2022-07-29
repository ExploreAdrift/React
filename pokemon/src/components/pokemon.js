import React, { useState } from "react";
import { ReactDOM } from "react";
import axios from "axios";

const Pokemon = () => {
  const [listOfPokemon, setlistOfPokemon] = useState([]);

  const listPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then((response) => setlistOfPokemon(response.data.results));
  };

  return (
    <div className="ui container field">
      <button className="positive fluid ui button" onClick={listPokemon}>
        LOOK AT ALL THESE POKEMON! GOTTA CATCH EM ALL!
      </button>

      <ul className="ui celled list">
        {listOfPokemon.length > 0 &&
          listOfPokemon.map((pokemon, index) => {
            return <li key={index}>{pokemon.name}</li>;
          })}
      </ul>
    </div>
  );
};
export default Pokemon;
