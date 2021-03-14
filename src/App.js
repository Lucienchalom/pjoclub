import './App.css';
import {Livro} from './paginas/livro/Livro'

const livro = {
  nome: "Ladrão de raios",
  ano: 2005,
  serie: "Os olimpianos",
  paginas: 350,
  descricao: "The Lightning Thief é um livro juvenil de fantasia e aventura baseado na mitologia grega, escrito por Rick Riordan. É o primeiro livro da série norte-americana Percy Jackson & the Olympians, que narra a vida do adolescente Percy Jackson que descobre ser um semideus, filho de Poseidon com uma humana.",
  imagem: "https://i.imgur.com/UyytMwD.jpg"
}

function App() {
  return (
    <Livro {...livro} />
  );
}

export default App;
