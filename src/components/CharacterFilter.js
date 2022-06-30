import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./Header";
import CharactersResults from "./CharactersResults";
import {getApi} from "../utils/getApi";
import Spinner from "./Spinner";
import "./CharacterFilter.css";

const CharacterFilter = () => {
 const initialCharacters = [];
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState(initialCharacters);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const data = await getApi(
      `https://rickandmortyapi.com/api/character/?name=${searchParams.get("filter")}`
      );
      if (data.info !== undefined && data.results !== undefined) {
        setCharacters(data.results);
        setLoading(false);
      } else {
        setCharacters([]);
      }
    })();
  }, [searchParams]);
  return (
    <>
      <Header/>
       {loading ? (
        <Spinner />
      ) : characters.length === 0 ? (
        <h2>Sin resultados para su busqueda</h2>
      ) : (
        <CharactersResults characters={characters} />
      )};
    </>
  );
};

export default CharacterFilter;
