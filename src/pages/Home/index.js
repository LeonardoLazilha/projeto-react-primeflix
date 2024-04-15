import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css'

function Home(){
    
    const [filme, setFilmes] = useState([]);
    const [loading, setLoading] =useState(true);
    
    useEffect(()=> {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "c55491832e0befcc7f369b4358242974",
                    language: "pt-BR",
                    page: 1
                }
            }) 
            setFilmes(response.data.results.slice(0,15));
            setLoading(false)
        }

        loadFilmes()
    },[])
    
    
    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }
    
    return(
        <div className="container">
            <div className="lista-filmes">
                {filme.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;