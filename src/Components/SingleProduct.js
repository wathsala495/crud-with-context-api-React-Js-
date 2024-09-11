import React, { useContext } from 'react'
import { Cart } from '../Context'

const SingleProduct = ({prod}) => {

 const {cart,setCart}=useContext(Cart)

 console.log(cart)

  return (
    <div>
       <div className='products'>
         <img src={prod.image} alt={prod.name} />
         <div className='productDesc'>
            <span style={{fontWeight:700}}>{prod.name}</span>
            <span>Rs:{prod.price}</span>
             
         </div>
        {cart.includes(prod)?(
             <button className='add'onClick={()=>setCart(cart.filter((c)=>c.id !== prod.id))}>Reomve From Cart</button>
           
        ):(
            <button className='add'onClick={()=> setCart([...cart,prod])}>Add to Cart</button>  
        )
        }
        
       </div>
    </div>
  )
}

export default SingleProduct
