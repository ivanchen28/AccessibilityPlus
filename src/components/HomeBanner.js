import './HomeBanner.css'
import React from 'react';
import { Button } from './Button';

function HomeBanner() {
	return (
		<div className='homebanner-container'>
			<h1>The Importance of <br/> Web Accessibility</h1>
			<p>Poor web design hampers users with accessibility needs.</p>
			<div className='banner-buttons'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
					type="button"
					link="/accessibility"
				>
					Learn More
				</Button>
				<Button
					className='btns'
					buttonStyle='btn--primary'
					buttonSize='btn--large'
					type="button"
					link="/demos"
				>
					Demos List <i class="fas fa-angle-right"></i>
				</Button>
			</div>
		</div>
	);
}

export default HomeBanner