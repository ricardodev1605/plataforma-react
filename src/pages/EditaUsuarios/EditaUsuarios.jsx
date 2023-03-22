import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useParams, Usenavigate, useNavigate } from "react-router-dom";

export function EditaUsuarios() {

    // useParams é uma função que retorna um objeto.
    // Este objeto contêm os parametros passados pela rota
    let params = useParams();
    let id = params.id;

    let usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); // retorna valor booleano que satisfaza a pesquisa
    });

    let navigate = useNavigate();

    function editar(){
        // ✅Capturar as infos do formulário
        // ✅Validar os dados de entrada;
        //✅ Modificar as informações no banco de dados
        
        navigate("/usuarios");
    };

    return (
        <div className="edita-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.idade}</span>
            <br />
            <span>{usuario.email}</span>
            <br />
            <Button onClick={editar}variant="dark">Editar</Button>
        </div>
    )
}