import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import './style.css'
import { Cart } from '../Context';


faker.seed(100);
// const Home = ({cart,setCart}) => {
    const Home = () => {
        const {cart,setCart}=useContext(Cart)
        console.log("use:"+JSON.stringify(useContext(Cart)))

    const productsArray=[...Array(20)].map(()=>(
        {
            id: faker.finance.accountNumber(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.urlPicsumPhotos(),
        }))

        // console.log(JSON.stringify(productsArray))

        const [products, setProducts] = React.useState(productsArray)
        // const [cart,setCart]=useState([])

  return (
    <div className='producContainer'>
      {products.map((prod)=>{
        return(
      
            // <SingleProduct prod={prod} cart={cart} setCart={setCart}/>
            <SingleProduct prod={prod} />
        
        )
      })}
    </div>
  )
}

export default Home
