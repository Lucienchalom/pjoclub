import "./Livro.css"
export const Livro = (props) => {
    return (
        <div>
            <h4>{props.nome}</h4>
            <img alt={props.nome} src={props.imagem} />
            <p><strong className="lable">Ano: </strong>{props.ano}</p>
            <p><strong className="lable">Série: </strong>{props.serie}</p>
            <p><strong className="lable">Descrição: </strong>{props.descricao}</p>
            <p><strong className="lable">Número de páginas: </strong>{props.paginas}</p>
        </div>
    )
}
