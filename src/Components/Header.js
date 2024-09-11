import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { Cart } from '../Context'

const Header = () => {
    const {cart} =useContext(Cart)
  return (
    <div>
    <span className='header'>
        Reacr Context API Tutorial
    </span>
    <ul className='nav'>
        <li className='prod'><Link to="/">Home Page</Link></li>
        <li className='prod1'><Link to="/cart">Cart({cart.length})</Link></li>
    </ul>

    </div>
  )
}

export default Header
