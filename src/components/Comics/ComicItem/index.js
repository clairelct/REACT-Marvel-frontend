import React from "react";
import "./index.css";

const ComicItem = ({ comic }) => {
  //return <div>{comic.title}</div>;
  return (
    <div className="item-container">
      <div className="item-img">
        <img
          className="responsive-img"
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt={`Portrait of ${comic.title}`}
        />
      </div>
      <h4>{comic.title}</h4>
      <p>{comic.description ? comic.description : "Pas de description"}</p>
    </div>
  );
};

export default ComicItem;
