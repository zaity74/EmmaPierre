import '../Navbar/navbar.css'
import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

function Searchbar(props){

    return(
        <div className='nav_search_section'>
            <AiOutlineSearch className='search-icons' />
            <input className="searchbar" type="text" placeholder="rechercher..."/>
        </div>
    )
}
export default Searchbar