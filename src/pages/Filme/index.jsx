import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import {toast} from 'react-toastify'

import Loading from '../../components/Loading'
import './filme.css'

function Filme(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [filme, setfilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: 'bcba87548bafae0e8414d8dc43e926e3',
                    language: 'pt-BR',
                }
            })
            .then((response) =>{
                setfilme(response.data)
                setLoading(false)
            })
            .catch(() =>{
                navigate('/', {replace: true})
                return;
            })
        }

        loadFilme();
    }, [navigate, id]) 

    function salvarFilme(){
        const minhaLista = localStorage.getItem('@snowflix');

        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
            toast.warn('Este filme já está na sua lista!')
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@snowflix', JSON.stringify(filmesSalvos))

        toast.success('Filme salvo com sucesso!')
    }

    if(loading){
        return(
            <Loading />
        )
    }

    return(
        <div className='container'>
            <div className='filme-info'>
                <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />

                <div className='textContent'>
                    <h3>Sinopse</h3>
                    <span>{filme.overview}</span>

                    <p><span>⭐</span> Avaliação: {filme.vote_average} / 10</p>
                </div>
                <div className='actionButtons'>
                    <button className='saveBtn' onClick={salvarFilme}>
                        Salvar
                    </button>
                    <button className='trailerBtn'>
                        <a target='_blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title}`}>Trailer</a>
                    </button>
                </div> 
            </div>       
        </div>
    )
}

export default Filme