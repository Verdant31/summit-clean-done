export default function Repositorio(props) {
    return (
        <ul>
            <li>{props.repositorio.name}</li>
            <a 
                href={props.repositorio.svn_url} 
                target="_blank" 
                rel="noreferrer"
            >
                Acessar repositório
            </a>
        </ul>
    )
}