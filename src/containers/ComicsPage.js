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
  const [search, setSearch] = useState("");
  const [favComics, setFavComics] = useState([]);

  const limit = 10; // à mettre sur 100

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/comics?limit=${limit}&offset=${offset}`
        );
        console.log(response.data);
        console.log("total", response.data.data.total);
        if (response.data.code === 200) {
          //setData(response.data);

          setTotal(response.data.data.total);
          setComics(response.data.data.results);
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

    //Copie, modifie(filtrage), remplace;
    const searchComics = [...comics];
    const filtered = searchComics.filter((comic) =>
      comic.title.includes(search)
    );
    console.log(filtered);
    setComics(filtered);
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
            onChange={handleChange}
            value={search}
          />
        </form>

        {/* Comics */}
        <div className="comics-container">
          {comics.map((comic, index) => {
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
