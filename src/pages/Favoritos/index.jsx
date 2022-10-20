import './favoritos.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

function Favoritos(){

   const [filmes, setFilmes] = useState([])

   useEffect(() =>{

      const minhaLista = localStorage.getItem('@snowflix');
      setFilmes(JSON.parse(minhaLista) || [])


   }, [])

   function excluirFilme(id){
      let filtroFilmes = filmes.filter((filme) =>{
         return (filme.id !== id)
      })

      setFilmes(filtroFilmes)
      localStorage.setItem('@snowflix', JSON.stringify(filtroFilmes))
      toast.success('Filme removido com sucesso!')
   }

   return(
      <div className='containerLista'>
         <h1>Filmes favoritos</h1>

         {filmes.length === 0 && <span>Sua lista de favoritos está vazia! 😔</span>}

         <ul>
            {filmes.map(item => {
               return(
                  <li key={item.id}>
                     <Link to={`/filme/${item.id}`}><img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/></Link>
                     <span><Link to={`/filme/${item.id}`}>{item.title}</Link></span>
                     <div className='favButtons'>
                        <button onClick={() => excluirFilme(item.id)}>
                           X
                        </button>
                     </div>
                     
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default Favoritos