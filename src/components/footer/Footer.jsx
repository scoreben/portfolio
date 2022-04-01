import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {GrTwitter} from  'react-icons/gr'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
         <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='sooter_socials'>
        <a href='https//facebook.com'><FaFacebookF/></a>
        <a href='https//instagram'> <FiInstagram/></a>
        <a href='https//twitter'><GrTwitter/>  </a>
      </div>
      <div className='footer_copyright'>
        <small>&copyright;EGATOR Tutorials.All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer