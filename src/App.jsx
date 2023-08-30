import { useState } from "react";
import Perfil from "./assets/components/Perfil";
import ReposList from "./assets/components/ReposList";
// import Formulario from "./assets/components/Formulario";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário submetido. Valor do input:', inputValue);
  }

  const handleChange = (event) => {
    setNomeUsuario(event.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Busque um Perfil no GitHub</h1>
        <input className="form-input" type="text" placeholder="Usuário do GitHub" onBlur={handleChange}/>
        <button className="form-button" type="submit" >Buscar</button>
      </form>
      {nomeUsuario.length>4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App
