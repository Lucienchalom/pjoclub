import "./Livro.css"
import { Link } from "react-router-dom";
export const Livro = (props) => {
    return (
        <div id="livro">
            <Link to = "/">Voltar</Link>
            <h4>{props.nome}</h4>
            <img alt={props.nome} src={props.imagem} />
            <div id="info">
                <p><strong className="lable">Ano: </strong>{props.ano}</p>
                <p><strong className="lable">Série: </strong>{props.serie}</p>
                <p><strong className="lable">Descrição: </strong>{props.descricao}</p>
                <p><strong className="lable">Número de páginas: </strong>{props.paginas}</p>
            </div>
        </div>
    )
}
