import '../../App.css'
import HomeBanner from '../HomeBanner'
import React from 'react'
import CardHolder from '../CardHolder';

function Home() {
  return (
    <body className='home-body'>
        <HomeBanner />
        <CardHolder />
    </body>
  );
}

export default Home