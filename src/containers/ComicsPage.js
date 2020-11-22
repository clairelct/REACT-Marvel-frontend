import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import ComicItem from "../components/Comics/ComicItem";
import Pagination from "../components/Shared/Pagination";

const ComicsPage = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  //
  const [search, setSearch] = useState("");
  const [filteredComics, setFilteredComics] = useState([]);
  //
  const [favComics, setFavComics] = useState([]);

  const limit = 12; // à mettre sur 100

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-claire.herokuapp.com/comics?limit=${limit}&offset=${offset}`
        );
        //console.log(response.data);
        //console.log("total", response.data.data.total);
        if (response.data.code === 200) {
          //setData(response.data);

          setTotal(response.data.data.total);
          setComics(response.data.data.results);
          setFilteredComics(response.data.data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [offset]);

  // FONCTION DE RECHERCHE
  const handleSearch = (e) => {
    setSearch(e.target.value);

    // Copie, modifie (filtrage), remplace
    //const searchComics = [...comics];
    const filtered = filteredComics.filter((comic) => {
      return comic.title.toLowerCase().includes(search.toLowerCase());
    });
    //console.log("filtered", filtered);

    setFilteredComics(filtered);
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
          <h1>Comics</h1>
          <div></div>
        </div>

        {/* <SearchBar /> */}

        <form className="searchbar-container">
          <input
            type="search"
            placeholder="I'm looking after..."
            onChange={handleSearch}
            value={search}
          />
        </form>

        {/* Comics */}
        <div className="comics-container">
          {filteredComics.map((comic, index) => {
            return (
              <ComicItem
                key={comic.id}
                comic={comic}
                favComics={favComics}
                setFavComics={setFavComics}
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

export default ComicsPage;
