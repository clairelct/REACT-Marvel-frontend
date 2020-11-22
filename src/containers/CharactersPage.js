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

  const limit = 10; // à mettre sur 100

  // Collecte de datas
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

  // FONCTION DE RECHERCHE
  const handleChange = (e) => {
    setSearch(e.target.value);

    // Copie, modifie (filtrage), remplace
    const searchCharacters = [...characters];
    const filtered = searchCharacters.filter((character) =>
      character.name.includes(search)
    );
    console.log(filtered);
    setCharacters(filtered);

    // const newCharacters = [];
    // for (let i = 0; i < characters.length; i++) {
    //   // Si le mot-clé existe et renvoie à un emoji
    //   if (characters[i].name.includes(search)) {
    //     newCharacters.push(characters[i]);
    //   }
    // }
    // setCharacters(newCharacters);
  };

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
            onChange={handleChange}
            value={search}
          />
        </form>

        {/* Personnages */}
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
