import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CharacterItem = ({ character }) => {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="characterfiche-container"
    >
      <div className="char-img">
        <img
          className="responsive-img"
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={`Portrait of ${character.name}`}
        />
      </div>
      <h4>{character.name}</h4>
      <p>
        {character.description ? character.description : "Pas de description"}
      </p>
    </Link>
  );
};

export default CharacterItem;
