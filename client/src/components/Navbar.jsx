import React from 'react'
import Logo from '../assets/images/Group 1 (3).png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className="Navbar">
        <div className="Logo">
        <Link className="link" to="/">

            <img src={Logo} width={200}/></Link> </div>

        <div className="RightNav">
            <div className="Links">
                <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
            </div>
            <div className="Links">
                <Link className="link" to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
            </div>
            <div className="Links">
                <Link className="link" to="/?cat=fashion"><h6>FASHION</h6></Link>
            </div>
            <div className="Links">
                <Link className="link" to="/?cat=lifestyle"><h6>LIFESTYLE</h6></Link>
            </div>
            <div className="Links">
                <Link className="link" to="/?cat=agriculture"><h6>AGRICULTURE</h6></Link>
            </div>
            <div className="Links">
                <Link className="link" to="/?cat=science"><h6>SCIENCE</h6></Link>
            </div>
            <div className="Links">
                <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>
            </div>
            <div className="Links">
                <Link className="link" to="/?cat=design"><h6>DESIGN</h6></Link>
            </div>
            <div className="details">
            <span>John</span>
            <span>Logout</span>
            <Link className='write'to="/write">Write</Link>

            </div>
          
          
        </div>
       
        

    </div>
    
  )
}

export default Navbar