import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

function Filme(){

    const {id} = useParams();

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
            });
        }

        loadFilme();
    }, []) 



    return(
        <div>
            <h1>Filme: {filme.title}</h1>
        </div>
    )
}

export default Filme