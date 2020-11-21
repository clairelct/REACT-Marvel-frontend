import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterItem = ({ character, favCharacters, setFavCharacters }) => {
  // FONCTION D'AJOUT EN FAVORIS
  const handleClickFavorite = () => {
    const newTab = [...favCharacters];

    if (newTab.indexOf(character.id) === -1) {
      newTab.push(character.id);
    } else {
      newTab.splice(newTab.indexOf(character.id), 1);
    }
    //console.log(newTab);

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
        className={
          favCharacters.indexOf(character.id) !== -1
            ? "favorite added"
            : "favorite"
        }
        onClick={() => {
          handleClickFavorite();
        }}
      >
        <FontAwesomeIcon icon="bolt" />
      </div>
      <Link to={`/characters/${character.id}`} className="item-flex">
        <div className="item-img">
          <img
            className="responsive-img"
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt={`Portrait of ${character.name}`}
          />
        </div>
        <div
          className={
            character.description ? "item-infos enlarge" : "item-infos"
          }
        >
          <div className="item-infos-title">
            <h4>{character.name}</h4>
          </div>
          <p className={character.description ? "set" : ""}>
            {character.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CharacterItem;
