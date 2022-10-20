import './loading.css';

function Loading(){
   return(
      <div className='loading'>
         <h2>Carregando</h2>
         <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   )
}

export default Loading