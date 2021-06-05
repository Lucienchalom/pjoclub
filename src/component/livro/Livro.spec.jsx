import { render, screen } from '@testing-library/react'
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

test("deve renderizar componente livro", () => {
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
    screen.debug()
})