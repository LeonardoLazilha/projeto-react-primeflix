import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';


import './favoritos.css';

function Favoritos(){
    
    const [filmes, setFilmes] = useState([]);


    useEffect(() => {
        const minhalista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhalista) || []);
    })

    function excluirFilme(id){
        const novaLista = filmes.filter(filme => filme.id !== id); 
        localStorage.setItem("@primeflix", JSON.stringify(novaLista)); 
        setFilmes(novaLista); 
        toast.success("Filme removido com sucesso")
    }

    
    return(
        <div className="meus-filmes">
          <h1>Meus filmes</h1>
    
          <ul>
            {filmes.map((filme) => {
              return(
                <li key={filme.id}>
                  <span>{filme.title}</span>
    
                  <div>
                    <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                    <button onClick={() => excluirFilme(filme.id)}> Remover da lista</button> 
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

export default Favoritos;
