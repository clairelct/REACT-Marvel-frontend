import React from "react";
import "./index.css";

const Character = ({ character }) => {
  return (
    <div className="character-container">
      <div className="char-img">
        <img
          className="responsive-img"
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={`Portrait of ${character.name}`}
        />
      </div>
      <div className="char-infos">
        <h2>{character.name}</h2>
        <p>
          {character.description ? character.description : "Pas de description"}
        </p>
        <div className="char-comics-container">
          {character.comics.items.map((comic, index) => {
            return <div key={index}>{comic.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
