import "./Livro.css"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Livro = (props) => {
    return (
        <div id="livro">
            <Link to="/" data-testid="link_voltar">Voltar</Link>
            <h4>{props.nome.toUpperCase()}</h4>
            <img alt={props.nome} src={props.imagem} />
            <div id="info">
                <p><strong className="lable">Ano: </strong>{props.ano}</p>
                <p><strong className="lable">Série: </strong>{props.serie}</p>
                <p><strong className="lable">Descrição: </strong>{props.descricao}</p>
                <p><strong className="lable">Número de páginas: </strong>{props.paginas}</p>
            </div>
            {
                props.paraVenda && (
                    <Link to={"/vendas/" + props.nome}> A venda </Link>
                )
            }
        </div>
    )
}
export default Livro
Livro.propTypes = {
    nome: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired,
    serie: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    paginas: PropTypes.number,
}
Livro.defaultProps = {
    paginas: 300,
    paraVenda: false,
}