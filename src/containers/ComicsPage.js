import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

const ComicsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <Loader
      className="loader"
      type="Puff"
      color="#ea603d"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  ) : (
    <main>
      <div className="container">
        <h2>Comics !</h2>

        {/* Personnages */}
        {/* <div className="characters-container">
          {characters.map((character, index) => {
            return <CharacterItem key={character.id} character={character} />;
          })}
        </div> */}

        {/* <Pagination
          limit={limit}
          total={total}
          offset={offset}
          setOffset={setOffset}
        /> */}
      </div>
    </main>
  );
};

export default ComicsPage;
