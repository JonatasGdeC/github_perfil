import { useEffect, useState } from 'react'
import styles from './Perfil.module.css'

const Perfil = ({nomeUsuario}) =>{
    const [perfilEncontrado, setPerfilEncontrado] = useState(true)

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resposta => {
            if(!resposta.ok){
                throw new Error("Erro de requisição")
            }
            return resposta.json();
        })
        .then(resJson => {
            setTimeout(()=>{
                setPerfilEncontrado(true)
                setRepos(resJson)
            }, 1000)
        })
        .catch(error => {
            setPerfilEncontrado(false)
        })
    }, [nomeUsuario])

    const resultadoPerfil = () =>{
        if (perfilEncontrado === false){
            return(
                <>
                    <img className={styles.avatar} src="data:image/webp;base64,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" alt="Foto usuário" />
                </>
            )
        } else {
            return(
                <>
                    <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Foto usuário" />
                    <h1 className={styles.name}>{nomeUsuario}</h1>
                </>
            )
        }
    }

    return (
        <div className={styles.header}>
            {resultadoPerfil()}
        </div>
    )
}

export default Perfil