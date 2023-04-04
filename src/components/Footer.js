import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom'

/* Code for text/subscription box/button above link lists
        <section className='footer-text'>
            <p className='footer-text-heading'>
                Some text here!
            </p>
        </section>
*/

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2 className='footer-heading'>Try all our demos!</h2>
                    <Link to='/'>Cognitive Impairment</Link>
                    <Link to='/'>Colourblindness</Link>
                    <Link to='/'>Contrast</Link>
                    <Link to='/'>Hearing Loss</Link>
                    <Link to='/'>Low Vision</Link>
                    <Link to='/'>Mobile Accessibility</Link>
                    <Link to='/'>Motor Impairment</Link>
                </div>
                <div className='footer-link-items'>
                    <h2 className='footer-heading'>Links</h2>
                    <Link to='/'>Homepage</Link>
                    <Link to='/about'>Why Accessibility?</Link>
                    <Link to='/'>Source Code</Link>
                    <Link to='/'>Back to Top</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer