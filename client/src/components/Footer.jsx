import React from 'react'
import Logo from '../assets/images/Group 1 (3).png'

const Footer = () => {
  return (
    <footer className='footer'>
        <img className="logo" src={Logo}/>
        <span className='span'>Made with Love and<b>  Kindness</b></span>
    </footer>
  )
}

export default Footer