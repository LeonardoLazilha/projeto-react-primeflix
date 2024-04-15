import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './filme.css'
import { toast } from 'react-toastify';

function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadingFilme(){
            try {
                const response = await api.get(`/movie/${id}`, {
                    params: {
                        api_key: "c55491832e0befcc7f369b4358242974",
                        language: "pt-BR"
                    }
                });
                setFilme(response.data);
                setLoading(false);
            } catch {
                console.log("Erro ao carregar filme:");
                navigate("/", {replace: true})
                return;
            }
        }
        loadingFilme();
        
    }, [navigate, id]); 

    function salvarFilme(){
        const minhalista = localStorage.getItem("@primeflix");
        let filmesSalvos = JSON.parse(minhalista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
            toast.error("Esse filme ja está na sua lista!")
            return;
        }

        filmesSalvos.push(filme)

        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso!")

    }



    if(loading){
        return(
            <div>
                <h1 className="filme-info">Carregando detalhes...</h1>
            </div>
        );
    }
    
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="blank" rel="external">Trailer</a>
                </button>
            </div>
        </div>
    );
}

export default Filme;
