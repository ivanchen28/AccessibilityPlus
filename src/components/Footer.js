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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 className='footer-heading'>Try all our demos!</h2>
            <Link to='/demos/cognitive-impairment'>Cognitive Impairment</Link>
            <Link to='/demos/colourblindness'>Colourblindness</Link>
            <Link to='/demos/hearing-loss'>Hearing Loss</Link>
            <Link to='/demos/low-vision'>Low Vision</Link>
            <Link to='/demos/mobile-accessibility'>Mobile Accessibility</Link>
            <Link to='/demos/motor-impairment'>Motor Impairment</Link>
          </div>
          <div className='footer-link-items'>
            <h2 className='footer-heading'>Pages</h2>
            <Link to='/'>Homepage</Link>
            <Link to='/accessiblity'>Why Accessibility?</Link>
            <Link to='/accounts'>User Accounts</Link>
            <br></br>
            <Link onClick={scrollToTop}>Back to Top</Link>
          </div>
          <div className='footer-link-items'>
            <h2 className='footer-heading'>Resources</h2>
            <Link to='https://github.com/ivanchen28/AccessibilityPlus'>Source Code</Link>
            <Link to='/citations'>Citations</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer