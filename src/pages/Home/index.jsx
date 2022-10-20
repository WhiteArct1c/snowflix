import {useEffect, useState} from 'react';
import api from '../../services/api'
import {Link} from 'react-router-dom'
import Loading from '../../components/Loading'
import './home.css'

//https://api.themoviedb.org/3/movie/now_playing?api_key=bcba87548bafae0e8414d8dc43e926e3

function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: 'bcba87548bafae0e8414d8dc43e926e3',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setFilmes(response.data.results.slice(0, 20));
            setLoading(false);
        }

        loadFilmes();
    },[])


    if(loading){
        return(
            <Loading />
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                    })
                }
            </div>
        </div>
    );
}

export default Home;