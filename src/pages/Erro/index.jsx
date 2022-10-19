import Thonk from '../../../assets/thonk-error.png'
import './erro.css'
import {Link} from 'react-router-dom'

function Erro(){
   return(
      <div className="notFound">
         <img src={Thonk}></img>
         <h1>Nós não encontramos esta página...</h1>
         <p>
            Reviramos todo este site de cabeça para baixo,
            porém, não encontramos a página que procura.
         </p>
         <Link to='/'>Voltar ao Início</Link>
      </div>
   )
}

export default Erro;