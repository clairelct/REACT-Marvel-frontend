import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import Character from "../components/Character";

const CharacterPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const [comics, setComics] = useState([]);
  //console.log("Character:", character);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/characters/${id}`
        );
        //console.log("response", response.data);
        if (response.data.code === 200) {
          setCharacter(response.data.data.results[0]);
          //setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const fetchDataComics = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/characters/${id}/comics`
        );
        //console.log("response", response.data);
        if (response.data.code === 200) {
          setComics(response.data.data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataComics();
  }, [id]);

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
        <Character character={character} comics={comics} />
      </div>
    </main>
  );
};

export default CharacterPage;
