import Head from './Head.jsx'
import './header.css' // Importing CSS styles for the header component
import React from 'react'
import {Link} from 'react-router-dom' // Importing Link component from react-router-dom for navigation

function Header(){
    const [click, setClick] = React.useState(false); // State to manage the click event for the mobile menu]

    return (
        <>
        <Head />
        <header>
            {/*The navigation that will apear ontop of every page */}
            <nav className='flexSB'>
                <ul className={click ? 'mobile-nav': 'flexSB'} onClick={() => setClick(false)}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">All Courses</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/journal">Journal</Link></li>
                    <li><Link to="/contact">Conctact</Link></li>
                </ul>
                <div className='start'>
                    <div className='button'>GET CERTIFICATE</div>
                </div>
                <button className='toggle' onClick={() => setClick(!click)}>
                    {click ? <i className='fa fa-times'></i>:
                    <i className='fa fa-bars'></i>}
                </button>
            </nav>
        </header>
        </>
    )
}

export default Header;