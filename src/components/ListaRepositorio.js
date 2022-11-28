import Repositorio from "./Repositorio";

export default function ListaRepositorios(props) {
    return (
        <div>
            {props.repositorios.map((repositorio) => {
                return (
                    <Repositorio 
                        key={repositorio.name} 
                        repositorio={repositorio}
                    />
                )
            })}
        </div>
    )
}