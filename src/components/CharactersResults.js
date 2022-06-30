import React from "react";
import CharacterCard from "./CharacterCard";
import "./CharactersResults.css";

const CharactersResults = ({ characters }) => {
  return (
    <div className="container-results">
      {characters.map(character => (
        <CharacterCard  key={character.id} character={character} />
      ))}
    </div>
  )
}

export default CharactersResults;