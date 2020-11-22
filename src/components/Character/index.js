import React from "react";
import "./index.css";

const Character = ({ character, comics }) => {
  return (
    <div className="character-container">
      <div className="char-img">
        <img
          className="responsive-img"
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={`Portrait of ${character.name}`}
        />
      </div>
      <div className="char-comics-container">
        {comics.map((comic, index) => {
          return (
            <div key={index} className="char-comic-container">
              <div className="comic-thumb">
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={`Illustration of ${comic.title}`}
                  className="responsive-img"
                />
              </div>
              <p>{comic.title}</p>
            </div>
          );
        })}
      </div>
      <div className="char-infos">
        <div>
          <h2>{character.name}</h2>
          <p>
            {character.description
              ? character.description
              : "Pas de description"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;
