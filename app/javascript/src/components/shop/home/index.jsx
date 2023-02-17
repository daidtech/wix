import React from 'react'
import About from '../about';
import ProductBlock from '../product_block';
import './style.scss'
const Home = () => {
  return (
    <div className="container main-content">
      <div className="row">
        {
          [1,2,3,4,5,6,7].map(element => {
           return <ProductBlock key={element}/>
          })
        }
      </div>
      <About />
    </div>
  )
}
export default Home;