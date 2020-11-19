import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import CharacterItem from "../components/Characters/CharacterItem";
import Pagination from "../components/Shared/Pagination";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  const limit = 10; // à mettre sur 100

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/characters?limit=${limit}&offset=${offset}`
        );
        //console.log(response.data);
        //console.log("total", response.data.data.total);
        if (response.data.code === 200) {
          //setData(response.data);

          setTotal(response.data.data.total);
          setCharacters(response.data.data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [offset]);

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
        <h2>Characters !</h2>

        {/* Personnages */}
        <div className="characters-container">
          {characters.map((character, index) => {
            return <CharacterItem key={character.id} character={character} />;
          })}
        </div>

        <Pagination
          limit={limit}
          total={total}
          offset={offset}
          setOffset={setOffset}
        />
      </div>
    </main>
  );
};

export default CharactersPage;
