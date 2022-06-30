import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const { name, image, status, species } = character;
  return (
  <div className="card">
    <img className="img-card" alt={image}  src={image} />
   <div className="content">
    <div className="text">
      <p>{name}</p>
      <p>{species}</p>
      <p>{status}</p>
   </div>
   </div>
   </div>
  );
};

export default CharacterCard;


