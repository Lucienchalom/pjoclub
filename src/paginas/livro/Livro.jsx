export const Livro = (props) => {
    return (
        <div>
            <h4>{props.nome}</h4>
            <img src={props.imagem} />
            <p><strong>Ano:</strong>{props.ano}</p>
            <p><strong>Série:</strong>{props.serie}</p>
            <p><strong>Descrição:</strong>{props.descricao}</p>
            <p><strong>Número de páginas:</strong>{props.paginas}</p>
        </div>
    )
}
