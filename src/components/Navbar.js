import React from 'react'
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='container'>
                <Link to="/" className="logo">logo</Link>
                <ul classname="nav-menu">
                    <li className='nav-items'>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='/About' className='nav-links'>
                            About
                        </Link>
                    </li> 
                    <li className='nav-items'>
                        <Link to='/Products' className='nav-links'>
                            Products
                        </Link>
                    </li> 
                    <li className='nav-items'>
                        <Link to='/Services' className='nav-links'>
                            Services
                        </Link>
                    </li> 
                    <li className='nav-items'>
                        <Link to='/Carers' className='nav-links'>
                            Careers
                        </Link>
                    </li> 
                    <li className='nav-items'>
                        <Link to='/Contact' className='nav-links'>
                            Contact us
                        </Link>
                    </li> 
                </ul>         
            </div>
        </nav>
    </>
  )
}

export default Navbar