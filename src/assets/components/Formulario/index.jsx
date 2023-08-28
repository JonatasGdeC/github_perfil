import { useState, useEffect } from "react"
import App from "../../../App";

const Formulario = () =>{
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    //mount === quando o componente é montado;
    //uptade === quando o componete é atualizado;
    //onmount === quanto o componente é desmontado;

    useEffect(()=>{
        console.log("O estado nome mudou")
    }, [nome]);

    const renderizResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma/3
        
        if(media >= 7){
            return (
                <p>Olá {nome}, Você foi aprovado!</p>
            )
        } else {
            return (
                <p>Olá {nome}, Você foi reprovado!</p>
            )
        }
    }

    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Nome do aluno" onChange={evento=> setNome(evento.target.value)} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizResultado()}
        </form>
    )
}

export default Formulario