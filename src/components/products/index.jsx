import React from 'react'
import Card from './card/Card'
import './styles/styles.css'

const Products = ({productImages}) => {
  return (
    <div className='product-container'>
        <h1 className="heading">Popular</h1>
        <Card/>
    </div>
  )
}

export default Products