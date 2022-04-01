import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>
          Hello I am
        </h5>
        <h1>Omar Ahmed</h1>
        <h5 className='text-light'> full stack developer</h5>
        <CTA />
        <HeaderSocial />
        
        <div className='me'>
          <img src={Me} alt='me'/>
     </div>
     <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header