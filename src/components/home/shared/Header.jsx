import React from 'react'
import { Link } from 'react-router-dom'
import './shared.css'

const Header = () => {
  return (
    <header>
        <nav className='menu'>
            <ul className='menu__list'>
                
                <li className='menu__item ecomerce'><Link to='/'>e-commerce</Link></li>
                <li><Link to='/Login'>Login</Link> </li>
                <li><Link to='/cart'>Cart</Link> </li>
                <li><Link to='/purchases'>Purchases</Link> </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header