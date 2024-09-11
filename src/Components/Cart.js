import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import { Cart } from '../Context'

// const Cart = ({cart,setCart}) => {
    const CartPage = () => {
        const {cart,setCart}=useContext(Cart)

    const [total,setTotal]=useState()

    useEffect(()=>{
       setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
    },[cart])

    console.log("cart:"+cart)
  return (
    <div>
     
     <span style={{fontSize:30}}>My Cart</span>
     <br></br>
     <span style={{fontSize:30}}>Total: Rs.{total}</span>
     <div className='producContainer'>
       {cart.map((prod)=>{
        return(
            <SingleProduct prod={prod}  key={prod.id}/>
        )
       })}
     </div>

    </div>
  )
}

export default CartPage
