import './navbar.css'
import React from 'react'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Menu_link } from '../../constante/data'
import LoginControl from '../LoginControl'
import Searchbar from '../Formulaire/searchbar'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/logo.png'
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { useState} from 'react';
import Panier from '../Card/panier';

// REDUX IMPORT 
import { addToCart } from '../../redux/actions/cartActions'

function Navbar(props){
 // State
const [isNavShowing, setIsNavShowing] = useState(false);
const [isWindowDown, setIsWindowDown] = useState(false);

// New variables
const { cartItems } = useSelector(state => state.addToCart);
const currentScrollPos = window.pageYOffset + 'px';
const prevScrollPos = useRef(0 + 'px');

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 1025) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(false);
    }
  };

  const handleScroll = () => {
    if (currentScrollPos + 'px' > prevScrollPos.current + 'px') {
      setIsWindowDown(true);
    } else {
      setIsWindowDown(false);
    }
    prevScrollPos.current = currentScrollPos;
  };

  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);

  // Cleanup listeners on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScroll);
  };
}, [currentScrollPos]);

console.log('Montre :', isWindowDown, currentScrollPos);




    // Variables - constantes
    const menu_items =  Menu_link.map(({name,path}, index) =>
        <li key={index}>
            <NavLink to={path} onClick={() => setIsNavShowing(prev => window.innerWidth < 1025 ? !prev : isNavShowing)} className={({isActive}) => isActive? 'active_nav' : ''}>{name}</NavLink>
        </li>
    )



    return(
        <nav className={isWindowDown ? 'active-nav' : null}>
            <div className='nav-top container'>
                <Searchbar />
                <Link to='/' className='Logo' onClick={() => setIsNavShowing(window.innerWidth < 1025 ? false : true)}>
                    <img src={Logo} alt="Logo" />
                </Link>
                <div className='userActions'>
                    <LoginControl />
                    <Link to='#' className='favorite'>
                        <AiOutlineHeart className='icone'/>
                    </Link>
                    <Link to='#' className='shoppingCart'>
                        <AiOutlineShoppingCart className='icone' />
                        <p className='numCart'>{cartItems.length ? cartItems.length : 0}</p>
                    </Link>
                </div>
                <button className='burger-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing
                        ? <AiOutlineClose className='burger' />
                        : <AiOutlineMenu className='burger' /> 
                    }
                </button>
            </div>
                
            <div className={isNavShowing ? 'nav-bottom' : 'active-nav-bottom' }>
                <ul className='container'>
                    {menu_items}
                </ul>
            </div>


        </nav>
    )
}
export default Navbar