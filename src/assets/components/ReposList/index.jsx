import { useEffect, useState } from "react";

import styles from './ReposList.module.css';
import carregando from './Carregando.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(()=>{
                setEstaCarregando(false)
                setRepos(resJson)
            }, 1000)
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <div className={carregando.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            ): 
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <b className={styles.listItemName}>Nome: </b> {repositorio.name} 
                            <b className={styles.listItemLanguage}>Linguagem: </b> {repositorio.language}
                            <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default ReposList