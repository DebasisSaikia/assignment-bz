import React from 'react'
import './styles/styles.css';

const Carousal = ({sliderImages}) => {

  React.useEffect(()=>{

  },[])
  return (
    <div className='slider-container'>
        {sliderImages&& sliderImages?.map((item)=>(
            <img src={item?.image} key={item?.id} alt={item?.name} />
        ))}
    </div>
  )
}

export default Carousal