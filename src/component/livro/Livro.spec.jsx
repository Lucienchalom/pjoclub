import { render, screen, cleanup } from '@testing-library/react'
import { Livro } from './Livro'
import { BrowserRouter as Router } from "react-router-dom"



xdescribe("aula de testes do livro", () => {
    beforeEach(() => {
        console.log("antes de cada um")
    })

    it("deve renderizar livro", () => {
        console.log("primeiro teste")
    })
    test.skip("segundo teste", () => {
        console.log("segundo")
    })

    describe("teste especial", () => {
        beforeEach(() => {
            console.log("log do segundo describe")
        })
        test("o teste especial", () => {
            console.log("terceiro encapsulado")
        })
    })
    afterEach(() => {
        console.log("depois de cada um")
    })
})

test.skip("deve renderizar componente livro", () => {
    render(
        <Router>
            <Livro
                nome={"odissseia no espaço"}
                imagem={"lonk ai"}
                ano={2001}
                serie={"meus filmes"}
                descricao={" nada a declarar, inocente até que se prove o contrario"}
                paginas={1}
            />
        </Router>
    )
})

test.skip("deve renderizar link voltar", async () => {
    render(<Router>
        <Livro
            nome={""}
            imagem={""}
            ano={""}
            serie={""}
            descricao={""}
        />
    </Router>
    )
    await screen.findByTestId("link_voltar")
})

test.skip("deve ter o titulo em maiscula", async () => {
    render(<Router>
        <Livro
            nome={"placeholder"}
            imagem={""}
            ano={""}
            serie={""}
            descricao={""}
        />
    </Router>
    )
    await screen.findByText("PLACEHOLDER")
})


describe("teste das infos", () => {
    afterEach(cleanup)

    test("deve renderizar as infos", async () => {
        render(<Router>
            <Livro
                nome={""}
                imagem={""}
                ano={2021}
                serie={"testeadores"}
                descricao={"a aventura de um testador"}
            />
        </Router>
        )
        screen.getAllByText(() => "Ano: 2021")
        screen.getAllByText(() => "Série: testadores")
        screen.getAllByText(() => "Descrição: a aventura de um testador")
    })


})
