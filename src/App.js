import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharactersPage from "./containers/CharactersPage";
import CharacterPage from "./containers/CharacterPage";
import ComicsPage from "./containers/ComicsPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
library.add(faBolt);

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/characters/:id">
          <CharacterPage />
        </Route>
        <Route path="/comics">
          <ComicsPage />
        </Route>
        <Route path="/">
          <CharactersPage />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
