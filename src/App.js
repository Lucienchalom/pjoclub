import './App.css';
import { Livro } from './paginas/livro/Livro'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const livros = [
  {
    id: "ladrao-raios",
    nome: "Ladrão de raios",
    ano: 2005,
    serie: "Os olimpianos",
    paginas: 350,
    descricao: "The Lightning Thief é um livro juvenil de fantasia e aventura baseado na mitologia grega, escrito por Rick Riordan. É o primeiro livro da série norte-americana Percy Jackson & the Olympians, que narra a vida do adolescente Percy Jackson que descobre ser um semideus, filho de Poseidon com uma humana.",
    imagem: "https://i.imgur.com/UyytMwD.jpg"
  },
  {
    id: "mar-monstros",
    nome: "O Mar de Monstros",
    ano: 2006,
    serie: "os olimpianos",
    paginas: 279,
    descricao: " Segundo da serie os olimpianos, o trio continua sua aventura atravesando o mar de monstros",
    imagem: "https://i.imgur.com/w2lIwmf.jpg"
  }
]

const LivroPage = () => {
  let { nome } = useParams();
  const livrorend = livros.find(livro=> livro.id=== nome)
  return <Livro {...livrorend} />
}

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
    <h2>Livros</h2>
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
