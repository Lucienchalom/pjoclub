import './App.css';
import { LivroPage } from './paginas/livro/Livro'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/livro/:nome">
            <LivroPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (<div>
    <img alt="Percy Jackson e Os Olimpianos, logo" src="https://imgur.com/g70lQNb.jpg"></img>
    <h2>Arquivo</h2>
    <ul>
      <li>
        <Link to="/livro/ladrao-raios">Ladrão de Raios</Link>
      </li>
      <li>
        <Link to="/livro/mar-monstros">O Mar de Monstros</Link>
      </li>
    </ul>
  </div>
  );

}
