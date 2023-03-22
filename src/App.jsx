import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Usuarios } from "./pages/Usuarios/Usuarios";
import { Login } from "./pages/Login/Login";
import { NotFound } from './pages/NotFound/NotFound';
import * as React from "react-bootstrap"
import { Root } from './pages/Root/Root';
import { Section, Section2, Section3 } from './components/Section/Section';
import { EditaUsuarios } from './pages/EditaUsuarios/EditaUsuarios';
import { Perfil } from './pages/Perfil/Perfil';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* {ANINHAMENTO DE ROTAS são aplicações de roteamento em páginas web onde o conteúdo do componente é alterado em função da rota acessada na página.
            Exemplo: exemplo.com/usuarios/3245/perfil
            Area de "perfil" do usuário "3245" dentro da relação de "usuarios".}  */}
        <Routes>
          <Route path="/" element = {<Root />}>
            <Route path ='/' element= {<Home />}>
            <Route path="/section" element = {<Section />} />
              <Route path="/section2" element = {<Section2 />} />
              <Route path="/section3" element = {<Section3 />}  />
            </Route>
            <Route path="/blog" element= {<Blog />} />
            <Route path="/contato" element= {<Contato />} />
            <Route path="/usuarios" element= {<Usuarios />} />
            <Route path="/usuario/edit/:id" element= {<EditaUsuarios />} />
            <Route path="/usuario/perfil/:id" element= {<Perfil />} />
            <Route path="/login" element= {<Login />} />
            <Route path="*" element= {<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;