import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css"

const Search = () => {
  const [character, setCharacter] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
     setCharacter(e.target);
    if (character.length <= 0) {
       return alert("Sin resultado");
    } else {
      navigate(`/results?filter=${character}`)
    };
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form-text"
        type="text"
        placeholder="Buscar Personaje"
        aria-label="Buscar Personaje"
        onChange={e => {setCharacter(e.target.value)
        }}
      />
    </form>
  );
};

export default Search;