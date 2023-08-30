import { useEffect, useState } from "react";

import styles from './ReposList.module.css';
import carregando from './Carregando.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState(false)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resposta => {
            if(!resposta.ok){
                throw new Error("Erro de requisição")
            }
            return resposta.json();
        })
        .then(resJson => {
            setTimeout(()=>{
                setDeuErro(false)
                setEstaCarregando(false)
                setRepos(resJson)
            }, 1000)
        })
        .catch(error => {
            setDeuErro(true)
        })

    }, [nomeUsuario])

    const buscaCompleta = () =>{
        if (deuErro === true){
            return (
                <h2>Usuáro não encontrado</h2>
            ) 
        } else {
            return (
                resultadoDaBusca()
            )
        }
    }
    
    const resultadoDaBusca = () =>{
        if(estaCarregando === true){
            return (
                <div className={carregando.spinner}></div>
            )
        } else {
            return (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <b className={styles.listItemName}>Nome: </b> {repositorio.name} 
                            <b className={styles.listItemLanguage}>Linguagem: </b> {repositorio.language}
                            <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )
        }
    }

    return(
        <div className="container">
            {buscaCompleta()}
        </div>
    )
}

export default ReposList