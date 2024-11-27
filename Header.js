import React, {useState} from 'react'


import './Header.css'
import SearchBar from './SearchBar';
import Top from "./Top";




const Header = () => {
    return (
        <section className='hero'>
           <div className='hero-content'>
                 
                 <SearchBar/>
                
           </div>
         
        </section>
     
     
    
    )
}
export default Header;