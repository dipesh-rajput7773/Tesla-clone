import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';

import './header.css'

function Header() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDark, setIsDark] = useState(false);
 
  

  function showMenu(e){
   e.preventDefault()
    setSidebarOpen(true);
  }

  function closeMenu(e){
    e.preventDefault()
    setSidebarOpen(false);
  }
  window.onscroll = () => {
    setIsDark(window.scrollY > 100 ? true : false);
  };


  return (
     <>
     <header  className={isDark ? "dark" : ""} >
         <div className='logo'>
         <img src='./logo.png'></img>
         </div>
         <div>
          <ul>
          <li><a href=''>Model S</a></li>
          <li><a href=''>Model 3</a></li>
          <li><a href=''>Model X</a></li>
          <li><a href=''>Model Y</a></li>
          <li><a href=''>Solar Roof</a></li>
          <li><a href=''>Solar Panels</a></li>
          <li><a href=''>Powerwall</a></li>
          </ul>
         </div>

         <div>
          <ul>
          
            <li><a href=''>Shop</a></li>
            <li><a href=''>Account</a></li>
           
            <li><a href=''  onClick={showMenu} >Menu</a></li>

          </ul>
        </div>
        
     </header>
     <div>
          <ul className='sidebar' style={{right:(sidebarOpen ==true) ? 0 : "-250px"}}>
        
          <ClearIcon
        className='closebtn'
        onClick={closeMenu} />
          
            <li><a href='#'>Model S</a></li>
            <li><a href='#'>Model 3</a></li>
            <li><a href='#'>Model X</a></li>
            <li><a href='#'>Model Y</a></li>
            <li><a href='#'>Solar Roof</a></li>
            <li><a href='#'>Solar Panesl</a></li>
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Tred In</a></li>
            <li><a href='#'>Test Drive</a></li>
            <li><a href='#'>Powerwall</a></li>
            <li><a href='#'>Commercial Energy</a></li>

          </ul>
        </div>
     </>
  )
}

export default Header