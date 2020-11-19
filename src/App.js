import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharactersPage from "./containers/CharactersPage";
import CharacterPage from "./containers/CharacterPage";
import ComicsPage from "./containers/ComicsPage";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/characters/:id">
          <CharacterPage />
        </Route>
        <Route path="/characters">
          <CharactersPage />
        </Route>
        <Route path="/comics">
          <ComicsPage />
        </Route>
        <Route path="/">
          <p>Home</p>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
