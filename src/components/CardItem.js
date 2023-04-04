import './CardHolder.css'
import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(properties) {
  return (
    <>
        <li className='card-item'>
            <Link className='card-item-link' to={properties.path}>
                <figure className='card-item-pic-wrap' data-category={properties.label}>
                    <img src={properties.src} alt="Selectable Demo" className='card-item-img' />
                </figure>
                <div className='card-item-info'>
                    <h5 className='card-item-text'>{properties.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem