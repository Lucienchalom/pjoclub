import axios from 'axios'
import './App.css';
import { LivroPage } from './paginas/livro/Livro'

import React, { useEffect, useState } from "react";
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
  const [livros, setLivros] = useState([])

  useEffect(() => {
    axios.get("/api/livros").then((response) => {
      setLivros(response.data)
      console.log("resultado do servidor:", response)
    });
  }, []);

  // proxima aula: fazer o load da home, carregar os dados extras da rota de livro
  return (<div>
    <img alt="Percy Jackson e Os Olimpianos, logo" src="https://imgur.com/g70lQNb.jpg"></img>
    <h2>Arquivo</h2>
    <ul>
      {
        livros.map((livro)=>{
          return(
            <li>
              <Link to ={"/livro/" + livro._id}> {livro.nome}</Link>
            </li>
          )
        })
      }
    </ul>
  </div>
  );

}
