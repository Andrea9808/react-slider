import React from 'react'
import starCreator from '../utils/starCreator';

const Slide = ({autore, recensione, voto, classes}) => {

  //funzione per creare le stelle
  // const stelle = (voto) => {

  //   //creo un array vuoto
  //   let stars = [];

  //   //ciclo per creare le stelle
  //   for (let i = 0; i < voto; i++) {

  //     //pusho le stelle nell'array
  //     stars.push(<span key={i} className='star'>★</span>)
  //   }
  //   return stars;
  // }
 
  return (
    <article className={`slide ${classes}`}>
        <div className='review'>
          <h4>
            {autore}
          </h4>
          <p>{recensione}</p>
          <div style={{display: 'flex',justifyContent: 'center',color: 'gold',}}>
            {starCreator(voto)}
          </div>
        </div>
    </article>
  )
}

export default Slide
