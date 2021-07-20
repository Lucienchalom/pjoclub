import axios from 'axios'
import { Livro } from '../../component/livro/Livro'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export const LivroPage = () => {
    
    let { id } = useParams();
    
    const [livro,setLivro] = useState({})
    useEffect(() =>{
        axios.get("/api/livros/"+id).then((response) =>{
            setLivro(response.data)
            console.log("resultado do servidor:", response)

        })
    },[])
    
    return <Livro {...livro} />
}

// const livros = [
//     {
//         id: "ladrao-raios",
//         nome: "Ladrão de raios",
//         ano: 2005,
//         serie: "Os olimpianos",
//         paginas: 350,
//         descricao: "The Lightning Thief é um livro juvenil de fantasia e aventura baseado na mitologia grega, escrito por Rick Riordan. É o primeiro livro da série norte-americana Percy Jackson & the Olympians, que narra a vida do adolescente Percy Jackson que descobre ser um semideus, filho de Poseidon com uma humana.",
//         imagem: "https://i.imgur.com/UyytMwD.jpg"
//     },
//     {
//         id: "mar-monstros",
//         nome: "O Mar de Monstros",
//         ano: 2006,
//         serie: "os olimpianos",
//         paginas: 279,
//         descricao: " Segundo da serie os olimpianos, o trio continua sua aventura atravesando o mar de monstros",
//         imagem: "https://i.imgur.com/w2lIwmf.jpg"
//     }
// ]