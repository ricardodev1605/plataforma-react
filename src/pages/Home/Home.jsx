import { Button } from "react-bootstrap"

import { Section } from "../../components/Section/Section"
import { Link, Outlet } from "react-router-dom"

// Atividade 1:
// Conhecendo os recursos de rotas alinhadas do React Router, crie dentro da rota da página principal (Home),
// três rotas filhas que representam, respectivamente, três seções dentro dessa página.
// Veja o vídeo de exemplo em anexo. 

export function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="section" >Section 1</Link>
                </li>
                <li>
                    <Link to="section2">Section 2</Link>
                </li>
                <li>
                    <Link to="section3">Section 3</Link>
                </li>
            </ul>
            <Outlet />
            <Button variant="dark">Enviar</Button>

        </div>
    )
}