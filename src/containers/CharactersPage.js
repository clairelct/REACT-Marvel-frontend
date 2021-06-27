import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
//import SearchBar from "../components/Shared/SearchBar";
import CharacterItem from "../components/Characters/CharacterItem";
import Pagination from "../components/Shared/Pagination";
import "../components/Shared/SearchBar/index.css";
import "../components/Shared/Pagination/index.css";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [favCharacters, setFavCharacters] = useState([]);

  const limit = 12; // set to 100
  const wording = "name";
  let filters = "";

  if (search.length === 0) {
    // All results (no search)
    filters = `https://marvel-backend-claire.herokuapp.com/characters?limit=${limit}&offset=${offset}&orderBy=${wording}`;
  } else {
    // Filtered results
    filters = `https://marvel-backend-claire.herokuapp.com/characters?limit=${limit}&offset=${offset}&orderBy=${wording}&${wording}StartsWith=${search}`;
  }

  // FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(filters);

        if (response.data.code === 200) {
          setCharacters(response.data.data.results);
          setIsLoading(false);
          setTotal(response.data.data.total);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [offset, search]);

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
        <div className="bloc-title">
          <h1>Characters</h1>
          <div></div>
        </div>

        {/* <SearchBar /> */}

        <form className="searchbar-container">
          <input
            type="search"
            placeholder="I'm looking after..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>

        {/* Characters list */}
        <div className="characters-container">
          {characters.map((character, index) => {
            return (
              <CharacterItem
                key={character.id}
                character={character}
                favCharacters={favCharacters}
                setFavCharacters={setFavCharacters}
              />
            );
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
