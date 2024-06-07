import React, {useState, useEffect} from 'react'
import Slide from './Slide'
import data from '../data'

const Slider = () => {
    const [recensioni, setRecensioni] = useState(data)
    const [active, SetActive] = useState(0)

    //auto slide
    useEffect(() => {
        let slider = setInterval(() => {
            SetActive(active + 1);
            if(active === recensioni.length - 1){
                SetActive(0);
            }
        }, 5000);

        return () => {
            clearInterval(slider);
        }
    }, [active])


    //funzione per passare la prossima recensione
    const  prossimaSlide = () => {
        SetActive(active + 1);
        if(active === recensioni.length - 1){
            SetActive(0);
        }
    }

    const precedenteSlide = () => {
        SetActive(active - 1);
        if(active === 0){
            SetActive(recensioni.length - 1);
        }
    }
  return (
    <div className='container slider'>

        {
                recensioni.map((recensione, index) => {
                    
                    let positionClass = '';
                    if(index === active) {
                        positionClass = 'active';
                    }
                    else if(index + 1  === active || (active === 0 && index === recensioni.length - 1)){
                        positionClass = 'prev';
                    }else{
                        positionClass = 'next';
                    }
                    return <Slide key={recensione.id} {...recensione}
                    classes = {positionClass} />
                }
            )
        }

        <div className="btn-group slider-btn-group">
            <button onClick={precedenteSlide} className="btn btn-slider prev-slider">prev</button>
            <button onClick={prossimaSlide} className="btn btn-slider next-slider">next</button>
        </div>
      
    </div>
  )
}

export default Slider
