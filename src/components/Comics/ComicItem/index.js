import React from "react";
import Cookies from "js-cookie";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Galaxy from "../../../assets/galaxy.jpg";

const ComicItem = ({ comic, favComics, setFavComics }) => {
  // FONCTION D'AJOUT EN FAVORIS
  const handleClickFavorite = () => {
    const newTab = [...favComics];

    if (newTab.indexOf(comic.id) === -1) {
      newTab.push(comic.id);
    } else {
      newTab.splice(newTab.indexOf(comic.id), 1);
    }
    //console.log(newTab);

    // Attention : modif. de state = asynchrone. Cookie set mais state pas fini!
    // Créer une copie pour contourner le problème
    const newFavComics = [...newTab];
    setFavComics(newFavComics);

    Cookies.set("Favorite_Comics", newFavComics, { expires: 7 });
  };

  // POUR RETROUVER LE COOKIE EN ARRAY DE NUMBERS: Utiliser .getJSON()
  // const test = Cookies.getJSON("Favorite_Comics");
  // console.log("test cookie:", test);

  console.log(comic);

  return (
    <div className="comics item-container">
      <div
        className={
          favComics.indexOf(comic.id) !== -1 ? "favorite added" : "favorite"
        }
        onClick={() => {
          handleClickFavorite();
        }}
      >
        <FontAwesomeIcon icon="bolt" />
      </div>
      <div className="item-flex">
        {/* <div className="item-img"> */}
        <img
          className="responsive-img"
          src={
            comic.thumbnail.path.includes("image_not_available")
              ? Galaxy
              : comic.thumbnail.path + "." + comic.thumbnail.extension
          }
          alt={`Portrait of ${comic.title}`}
        />
        {/* </div> */}
        <div className="item-infos">
          <div className="item-infos-title">
            <h4>{comic.title}</h4>
          </div>
          <p className={comic.description ? "set" : ""}>{comic.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ComicItem;
