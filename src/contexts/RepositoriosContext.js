import { useEffect, useState, createContext, useContext } from 'react';

const RepositoriosContext = createContext();

export function RepositoriosContextProvider(props) {
    const [ repos, setRepos ] = useState([]);
    useEffect(() => {
      fetch("https://api.github.com/users/verdant31/repos")
      .then(response => response.json())
      .then(data => setRepos(data))
    }, [])

    return (
        <RepositoriosContext.Provider value={{repos}}>
            {props.children}
        </RepositoriosContext.Provider>
    )
}

export function useRepositorios() {
    const value = useContext(RepositoriosContext);
    return value;
}