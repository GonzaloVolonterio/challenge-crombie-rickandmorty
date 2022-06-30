import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import CharactersResults from "../components/CharactersResults";
import { getApi } from "../utils/getApi";
import "./LandingPage.css";

const LandingPage = () => {
 const initialInfo = [];
 const initialCharacters = [];
  const [info, setInfo] = useState(initialInfo);
  const [characters, setCharacters] = useState(initialCharacters);

  const handleClick = async (e) => {
   e.preventDefault();
    if (info.next !== null) {
       const data = await getApi(info.next);
    if (data.info !== undefined && data.results !== undefined) {
       setInfo(data.info);
       setCharacters(data.results);
      };
    };
  };

   useEffect(() => {
    (async () => {
      const data = await getApi();
      setInfo(data.info);
      setCharacters(data.results);  
    })();
  },[]);

  return (
    <>
     <Header/>
    <CharactersResults characters={characters} />
      <button className="button" onClick={(e) => handleClick(e)}>
        Cargar más
      </button>     
    </>
  );
};

export default LandingPage;