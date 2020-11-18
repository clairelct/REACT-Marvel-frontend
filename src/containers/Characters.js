import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

const Characters = () => {
  const [data, setData] = useState(); // un objet
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/characters");
        //console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
    <div>
      <p>Characters !</p>
    </div>
  );
};

export default Characters;
