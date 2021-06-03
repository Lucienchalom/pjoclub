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
          <Route path="/livro/:id">
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

/*function MouseHunt() {
  const [exibirJournal, setExibirJournal] = useState(true)
  const [exibirDaily, setExibirDaily] = useState(false)
  const [exibirTips, setExibirTips] = useState(false)

  const handleOnClickJournal = () => {
    setExibirJournal(true)
    setExibirDaily(false)
    setExibirTips(false)
  }
  const handleOnClickDaily = () => {
    setExibirJournal(false)
    setExibirDaily(true)
    setExibirTips(false)
  }
  const handleOnClickTips = () => {
    setExibirJournal(false)
    setExibirDaily(false)
    setExibirTips(true)
  }

  return (<div>
    <button onClick={handleOnClickJournal}>Journal</button>
    <button onClick={handleOnClickDaily}>Daily</button>
    <button onClick={handleOnClickTips}>Tips</button>

    {exibirJournal === true && <div><p>conteudo do Journal</p></div>}
    {exibirDaily === true && <div><p>conteudo da Daily</p></div>}
    {exibirTips === true && <div><p>conteudo do Tips</p></div>}
  </div>)
}*/

function Home() {
  const [livros, setLivros] = useState([])
  const [carregamento, setCarregar] = useState(true)
  const [ocorreuErro, setOcorreuErro] = useState(false)
  const [mensagemErro, setMensagemErro] = useState("Ocorreu um erro, tente mais tarde")

  const carregarLivros = () =>{
    const callbackSucesso = (response) => {
      setLivros(response.data)
      console.log("resultado do servidor:", response)
    }
    const callbackFinally = () => {
      setCarregar(false)
    }
    const callbackErro = (erro) => {
      setOcorreuErro(true)
      setMensagemErro(erro.message)
    }
    axios.get("/api/livros")
      .then(callbackSucesso)
      .catch(callbackErro)
      .finally(callbackFinally)
  }

  useEffect(() => {
    carregarLivros()
  }, []);

  const onClickRecarregar= () =>{
    setCarregar(true)
    setOcorreuErro(false)
    carregarLivros()
  }


  // proxima aula: fazer o load da home, carregar os dados extras da rota de livro
  return (<div>
    <img alt="Percy Jackson e Os Olimpianos, logo" src="https://imgur.com/g70lQNb.jpg"></img>
    <h2>Arquivo</h2>
    <ul>
      {
        livros.map((livro) => {
          return (
            <li>
              <Link to={"/livro/" + livro._id}> {livro.nome}</Link>
            </li>
          )
        })
      }
      {ocorreuErro == true &&
      <div>
         <p>{mensagemErro} </p>
         <button onClick={onClickRecarregar}>Recarregar</button>
      </div>}
      {carregamento == true && <p> carregando </p>}

    </ul>
  </div>
  );

}
