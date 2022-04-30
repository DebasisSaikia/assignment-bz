import React from 'react'
import './card.css'
import { productImages } from '../../../assets/data'

const Card = () => {
  return (
    <div className='card-container'>
        {productImages?.map((item,index)=>(
            <div className="card-content" key={index}>
        <div className="product-details">
            <img src={item?.image} alt={item?.alt} height={129} width={92} className="product-img"/>
                <p>{item?.alt}</p>
                <span>{item?.price}</span>
            </div>
        </div>
        ))}
        
    </div>
  )
}

export default Card