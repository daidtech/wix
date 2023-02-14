import React from 'react'
import './style.scss'

const ProductBlock = () => {
  return (
    <div className="col-3">
      <div className="product">
        <img src="./images/product1.jpeg" alt="Product" className="thumnail" />
        <p className="name">I'm cute cat</p>
        <p className="price">$120k</p>
      </div>
    </div>
  )
}

export default ProductBlock;