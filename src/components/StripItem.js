import './StripItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

function StripItem(properties) {
  const className = (properties.reverse === 'true') ? 'strip-link-reverse' : 'strip-link';
  return (
    <>
      <li className='strip-item'>
        <Link className={className} to={properties.path}>
          <figure className='strip-figure'>
            <img src={properties.src} alt="Selectable Demo" className='strip-img' />
          </figure>
          <div className='strip-body'>
            <h3 className='strip-header'>{properties.title}</h3>
            <p className='strip-text'>{properties.text}</p>
          </div>
        </Link>
      </li>
    </>
  )
}

export default StripItem