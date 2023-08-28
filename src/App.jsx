import { useState } from "react";
import Perfil from "./assets/components/Perfil";
import ReposList from "./assets/components/ReposList";
// import Formulario from "./assets/components/Formulario";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
    <input type="text" onBlur={evento => setNomeUsuario(evento.target.value)} />
    {nomeUsuario.length>4 &&(
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
      {/* {formularioEstaVisivel&&(
        <Formulario/>
      )}
      <button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
