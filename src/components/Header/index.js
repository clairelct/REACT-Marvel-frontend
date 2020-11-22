import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-marvel.png";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo Marvel" className="responsive-img" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/comics">Comics</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
