import './CardHolder.css'
import React from 'react';
import CardItem from './CardItem';

function CardHolder() {
  return (
    <div className='cards-holder'>
        <h1>Check out our demos!</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-list'>
                    <CardItem
                        src="images/cognitive-impairment.jpg"
                        text="Over 10% of adults will experience cognitive impairment by the age of 65."
                        label='Cognitive Impairment'
                        path='/cognitive-impairment'
                    />
                    <CardItem
                        src="images/colourblindness.jpg"
                        text="300 million people suffer from colour vision deficiency globally, also known as colourblindness."
                        label='Colourblindness'
                        path='/colourblindness'
                    />
                </ul>
                <ul className='cards-list'>
                    <CardItem
                        src="images/hearing-loss.jpg"
                        text="Nearly 20% of people experience hearing loss and deafness of varying degrees."
                        label='Hearing Loss'
                        path='/hearing-loss'
                    />
                    <CardItem
                        src="images/contrast.jpg"
                        text="Both high and low contrast colour schemes lead to eye strain and fatigue."
                        label='Contrast'
                        path='/contrast'
                    />
                    <CardItem
                        src="images/mobile-accessibility.jpg"
                        text="Mobile devices are becoming popular support tools for users with accessibility needs."
                        label='Mobile Support'
                        path='/mobile-support'
                    />
                </ul>
                <ul className='cards-list'>
                    <CardItem
                        src="images/motor-impairment.jpg"
                        text="Fine motor impairment in the hands and arms severely impedes web and computer usage."
                        label='Motor Impairment'
                        path='/motor-impairment'
                    />
                    <CardItem
                        src="images/low-vision.jpg"
                        text="Users with uncorrectable vision loss may require dynamic sizing of webpages and other accessibility features."
                        label='Low Vision'
                        path='/low-vision'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default CardHolder