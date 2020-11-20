import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const CharacterItem = ({ character, favCharacters, setFavCharacters }) => {
  // FONCTION D'AJOUT EN FAVORIS
  const handleClickFavorite = () => {
    const newTab = [...favCharacters];
    newTab.push(character.id);
    // Attention : modif. de state = asynchrone. Cookie set mais state pas fini!
    // Créer une copie pour contourner le problème
    const newFavCharacters = [...newTab];
    setFavCharacters(newFavCharacters);

    Cookies.set("Favorite_Characters", newFavCharacters, { expires: 7 });
  };

  // POUR RETROUVER LE COOKIE EN ARRAY DE NUMBERS: Utiliser .getJSON()
  // const test = Cookies.getJSON("Favorite_Characters");
  // console.log("test cookie:", test);

  return (
    <div className="item-container">
      <div
        className="favorite"
        onClick={() => {
          handleClickFavorite();
        }}
      ></div>
      <Link to={`/characters/${character.id}`}>
        <div className="item-img">
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
    </div>
  );
};

export default CharacterItem;
