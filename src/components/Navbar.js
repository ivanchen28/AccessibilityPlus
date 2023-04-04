import './Navbar.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        AccessibilityPlus
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}>

                        </i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                Why Accessibility?
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/demos' className='nav-links' onClick={closeMobileMenu}>
                                Demos
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

/* Code to add button:
    // import { Button } from './Button'
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) setButton(false);
        else setButton(true);
    }
    window.addEventListener('resize', showButton);
    // {button && <Button buttonStyle='btn--outline'>Button!</Button>}
*/
